import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Layout, Tab, TabBar, Text } from '@ui-kitten/components';
import { Video } from 'expo-av';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Alert, LogBox, ScrollView, Share, StyleSheet, View } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import * as Progress from 'react-native-progress';
import { useTranslation } from 'react-i18next';
import * as FileSystem from 'expo-file-system';
import coursesApi from '../../api/coursesApi';
import instructorsApi from '../../api/instructorsApi';
import lessonApi from '../../api/lessonApi';
import paymentApi from '../../api/paymentApi';
import usersApi from '../../api/usersApi';
import navNames from '../../constants/navNames';
import { SnackBarContext } from '../../context/SnackBarContext';
import { checkTypeVideo, youTubeGetID } from '../../utils/utils';
import ButtonLeftIcon from '../Common/ButtonLeftIcon';
import ButtonTitleIcon from '../Common/ButtonTitleIcon';
import ContentDropdown from '../Common/ContentDropdown';
import Contents from './Contents/Contents';
import CoursesInfoRow from './CourseInfoRow';
import Review from './Review/Review';
import Transcript from './Transcript/Transcript';
import { DownLoadContext } from '../../context/DonwloadContext';

const CourseDetail = (props) => {
  const { navigation } = props;
  const { course } = props.route.params;
  const playerRef = useRef();
  const { t } = useTranslation();

  const snContext = useContext(SnackBarContext);
  const downContext = useContext(DownLoadContext);
  const [courseDetail, setCourseDetail] = useState(null);
  const [detailWithLesson, setDetailWithLesson] = useState(null);
  const [uriVideo, setUriVideo] = useState();
  const [typeVideo, setTypeVideo] = useState(0);
  const [isLike, setIsLike] = useState(false);
  const [isEnroll, setIsEnroll] = useState(false);
  const [isFinish, setIsFinish] = useState(false);
  const [lessonActive, setLessonActive] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isDownload, setIsDownload] = useState(false);

  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false);
      setIsFinish(true);
      Alert.alert('Lesson has finished !');
    }
  }, []);
  const updateStatus = async () => {
    try {
      await lessonApi.updateStatus({
        lessonId: lessonActive.id,
      });
    } catch (err) {
      snContext.snackbar.set(true);
      if (err.response) snContext.snackbar.setData(`${err.response.status} - ${err.response.data.message}`);
    }
  };
  useEffect(() => {
    if (isFinish) {
      updateStatus();
    }
  }, [isFinish]);

  const TabNavigation = createMaterialTopTabNavigator();
  const TopTabBar = ({ navigation, state }) => (
    <TabBar
      selectedIndex={state.index}
      onSelect={(index) => {
        navigation.navigate(state.routeNames[index]);
      }}
    >
      <Tab title={t('contentTab')} />
      <Tab title={t('reviewTab')} />
      <Tab title={t('transcriptTab')} />
    </TabBar>
  );

  const getData = useCallback(async () => {
    snContext.loading.set(true);
    if (downContext.courses.checkExist(course)) {
      setIsDownload(true);
    }
    const resLikeStatus = usersApi.getCourseLikeStatus({ courseId: course.id });
    const resDetail = coursesApi.getCourseDetail({ id: course.id, userId: course.id });
    const resDetailWithLesson = coursesApi.detailWithLesson({ courseId: course.id });
    const resCheckout = usersApi.checkOwnCourse({ courseId: course.id });
    const resProgress = coursesApi.getProcessCourses({ courseId: course.id });
    await Promise.all([resLikeStatus, resDetail, resDetailWithLesson, resCheckout, resProgress])
      .then((values) => {
        setIsLike(values[0].likeStatus);
        setCourseDetail(values[1].payload);
        setDetailWithLesson(values[2].payload);
        setIsEnroll(values[3].payload.isUserOwnCourse);
        setProgress(values[4].payload);
      })
      .catch((err) => {
        snContext.snackbar.set(true);
        if (err.response) snContext.snackbar.setData(`${err.response.data.message}`);
      });

    snContext.loading.set(false);
  }, [course]);

  const wishListHandler = () => {
    setIsLike(!isLike);
    try {
      usersApi.likeCourse({ courseId: course.id });
    } catch (err) {
      snContext.snackbar.set(true);
      snContext.snackbar.setData(`${err.response.status} - ${err.response.data.message}`);
    }
  };

  const enrollHandler = async () => {
    if (isEnroll === true) return;
    try {
      snContext.loading.set(true);
      await paymentApi.enrollFreeCourse({ courseId: course.id });
      snContext.snackbar.set(true);
      snContext.snackbar.setData(`Enroll success!`);
      setIsEnroll(!isEnroll);
      const resDetail = coursesApi.getCourseDetail({
        id: course.id,
        userId: course.id,
      });
      const resDetailWithLesson = coursesApi.detailWithLesson({
        courseId: course.id,
      });
      await Promise.all([resDetail, resDetailWithLesson])
        .then((values) => {
          setCourseDetail(values[0].payload);
          setDetailWithLesson(values[1].payload);
        })
        .catch((err) => {
          snContext.snackbar.set(true);
          if (err.response) snContext.snackbar.setData(`${err.response.status} - ${err.response.data.message}`);
        });
    } catch (err) {
      snContext.snackbar.set(true);
      snContext.snackbar.setData(`Can't Enroll this course!`);
    }
    snContext.loading.set(false);
  };
  const clickHandlerAuthor = async (item) => {
    try {
      const res = await instructorsApi.getDetailInstructors({ id: item.instructorId });
      const author = { ...res.payload };
      author['user.name'] = res.payload.name;
      author['user.phone'] = res.payload.phone;
      author['user.avatar'] = res.payload.avatar;
      navigation.navigate(navNames.author, { author });
    } catch (err) {
      snContext.snackbar.set(true);
      snContext.snackbar.setData(`${err.response.status} - ${err.response.data.message}`);
    } finally {
      snContext.loading.set(false);
    }
  };

  const uriVideoHandler = (value) => {
    const type = checkTypeVideo(value);
    setTypeVideo(type);
    if (type === 2 || type === 0) {
      const videoId = youTubeGetID(value);
      setIsFinish(false);
      setUriVideo(videoId.toString());
    } else {
      setUriVideo(value);
    }
  };

  const getCurrentLesson = useCallback(async () => {
    if (isEnroll) {
      try {
        const res = await coursesApi.lastWatched({ courseId: course.id });
        if (res.payload) {
          if (res.payload.videoUrl) {
            const checkExist = await FileSystem.getInfoAsync(
              `${FileSystem.documentDirectory}${res.payload.lessonId}.mp4`
            );
            if (checkExist.exists) setUriVideo(checkExist.uri);
            uriVideoHandler(res.payload.videoUrl);
          }
          setLessonActive({ id: res.payload.lessonId });
        }
      } catch (err) {
        snContext.snackbar.setData(`${err.response.status} - ${err.response.data.message}`);
      }
    } else if (course.promoVidUrl) uriVideoHandler(course.promoVidUrl);
    else setUriVideo(null);
  }, [course, isEnroll]);
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    getData();
    getCurrentLesson();
    return () => {
      // eslint-disable-next-line no-unused-expressions
      playerRef.current = null;
    };
  }, [isEnroll]);

  const shareHandler = async () => {
    try {
      const result = await Share.share({
        message: `http://dev.letstudy.org/course-detail/${course.id}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      snContext.snackbar.set(true);
      snContext.snackbar.setData(`${error.message}`);
    }
  };

  const getUrlLessonVideo = async (lessonId, courseId) => {
    if (courseId && lessonId) {
      const res = await lessonApi.getVideoLesson({ courseId, lessonId });
      if (res.payload) {
        return res.payload.videoUrl;
      }
    }
    return null;
  };

  const downloadLesson = async (lessonId, courseId) => {
    if (!lessonId && !courseId) return;
    const videoUrl = await getUrlLessonVideo(lessonId, courseId);
    if (!videoUrl) return;
    if (checkTypeVideo(videoUrl) !== 1) return;
    const checkExist = await FileSystem.getInfoAsync(`${FileSystem.documentDirectory}${lessonId}.mp4`);
    if (checkExist.exists) return;
    const callback = (downloadProgress) => {
      const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
      snContext.snackbar.set(true);
      snContext.snackbar.setData(` Downloading... ${progress.toFixed(2) * 100}%`);
    };
    const downloadResumable = FileSystem.createDownloadResumable(
      videoUrl,
      `${FileSystem.documentDirectory}${lessonId}.mp4`,
      {},
      callback
    );

    try {
      await downloadResumable.downloadAsync();
    } catch (e) {
      snContext.snackbar.set(true);
      snContext.snackbar.setData(e);
    }
  };

  const downloadCourse = (course) => {
    course.section.forEach((section) => {
      section.lesson.forEach((lesson) => {
        downloadLesson(lesson.id, course.id);
      });
    });
  };

  const downloadHandler = () => {
    if (isDownload) return;
    if (detailWithLesson) downloadCourse(detailWithLesson);
    if (course) downContext.courses.addCourse(course);
    setIsDownload(true);
  };

  return (
    <Layout level="2" style={styles.layout}>
      {typeVideo === 1 ? (
        <Video
          ref={playerRef}
          style={styles.video}
          source={{ uri: uriVideo || null }}
          useNativeControls
          resizeMode="cover"
        />
      ) : (
        <YoutubePlayer
          ref={playerRef}
          height={250}
          play={playing}
          videoId={uriVideo || null}
          onChangeState={onStateChange}
        />
      )}

      <ScrollView>
        <View style={styles.container}>
          <View style={styles.body}>
            <Text numberOfLines={3} category="h3">
              {course.title}
            </Text>
            <CoursesInfoRow item={course} navigation={navigation} clickHandlerAuthor={clickHandlerAuthor} />
            <View style={styles.progressArea}>
              <Text category="s1">{t('completed')}:</Text>
              <Progress.Bar progress={progress / 100} width={200} color="green" />
            </View>

            <View style={styles.buttonsGroup}>
              <ButtonTitleIcon
                onPress={wishListHandler}
                title={t('wishList')}
                status={isLike && 'danger'}
                nameIcon={isLike ? 'heart' : 'heart-outline'}
              />
              <ButtonTitleIcon
                onPress={enrollHandler}
                title={t('enroll')}
                status={isEnroll && 'success'}
                nameIcon={isEnroll ? 'book-open' : 'book-open-outline'}
              />
              <ButtonTitleIcon title={t('share')} nameIcon="share-outline" onPress={shareHandler} />
              <ButtonTitleIcon
                title={t('download')}
                status={isDownload && 'success'}
                nameIcon={isDownload ? 'cloud-download' : 'cloud-download-outline'}
                onPress={downloadHandler}
              />
            </View>
            <ContentDropdown height={50}>
              <Text>{course.description}</Text>
              <Text style={{ marginVertical: 5 }} category="s1">
                Learn What:
              </Text>
              {course.learnWhat &&
                course.learnWhat.map((item, index) => (
                  <Text category="p2" key={index}>
                    -{item}
                  </Text>
                ))}
            </ContentDropdown>

            <ButtonLeftIcon
              onPress={() =>
                navigation.navigate(navNames.seeAll, {
                  title: 'Related Course',
                  courses: courseDetail ? courseDetail.coursesLikeCategory || [] : [],
                })
              }
              appearance="outline"
              status="basic"
              nameIcon="pantone-outline"
            >
              {t('viewRelate')}
            </ButtonLeftIcon>
            <ButtonLeftIcon
              onPress={() => clickHandlerAuthor(course)}
              appearance="outline"
              status="basic"
              nameIcon="checkmark-circle-outline"
            >
              {t('viewRelateBy')} '{course['instructor.user.name']}''
            </ButtonLeftIcon>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          {courseDetail && (
            <TabNavigation.Navigator tabBar={(props) => <TopTabBar {...props} />} initialRouteName="Contents">
              <TabNavigation.Screen
                name="Contents"
                children={() =>
                  detailWithLesson && (
                    <Contents
                      lessonActive={lessonActive}
                      setLessonActive={setLessonActive}
                      course={detailWithLesson}
                      isEnroll={isEnroll}
                      uriVideoHandler={uriVideoHandler}
                      getUrlLessonVideo={getUrlLessonVideo}
                    />
                  )
                }
              />
              <TabNavigation.Screen
                name="Review"
                children={() => <Review course={courseDetail} isEnroll={isEnroll} />}
              />
              <TabNavigation.Screen
                name="Transcript"
                children={() => <Transcript course={courseDetail} isEnroll={isEnroll} />}
              />
            </TabNavigation.Navigator>
          )}
        </View>
      </ScrollView>
    </Layout>
  );
};
const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  container: {
    flex: 1,
    margin: 10,
  },
  body: {
    flex: 1,
  },
  buttonsGroup: {
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    textAlign: 'center',
  },
  video: {
    height: 250,
  },
  progressArea: {
    display: 'flex',
    marginVertical: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default CourseDetail;
