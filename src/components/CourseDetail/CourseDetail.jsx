import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Layout, Tab, TabBar, Text } from '@ui-kitten/components';
import { Video } from 'expo-av';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Alert, LogBox, ScrollView, StyleSheet, View } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import coursesApi from '../../api/coursesApi';
import instructorsApi from '../../api/instructorsApi';
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

const CourseDetail = (props) => {
  const { navigation } = props;
  const { course } = props.route.params;
  const playerRef = useRef();

  const snContext = useContext(SnackBarContext);
  const [courseDetail, setCourseDetail] = useState(null);
  const [uriVideo, setUriVideo] = useState();
  const [typeVideo, setTypeVideo] = useState(0);
  const [isLike, setIsLike] = useState(false);
  const [isEnroll, setIsEnroll] = useState(false);

  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const TabNavigation = createMaterialTopTabNavigator();
  const TopTabBar = ({ navigation, state }) => (
    <TabBar
      selectedIndex={state.index}
      onSelect={(index) => {
        navigation.navigate(state.routeNames[index]);
      }}
    >
      <Tab title="CONTENTS" />
      <Tab title="REVIEW" />
      <Tab title="TRANSCRIPT" />
    </TabBar>
  );
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    snContext.loading.set(true);
    if (course.promoVidUrl) uriVideoHandler(course.promoVidUrl);
    else setUriVideo(null);
    getData();
    return () => {
      // eslint-disable-next-line no-unused-expressions
      playerRef.current = null;
    };
  }, []);

  const getData = async () => {
    const resLikeStatus = await usersApi.getCourseLikeStatus({ courseId: course.id });
    const resDetail = await coursesApi.getCourseDetail({ id: course.id, userId: course.id });
    const resCheckout = await usersApi.checkOwnCourse({ courseId: course.id });

    await Promise.all([resLikeStatus, resDetail, resCheckout])
      .then((values) => {
        setIsLike(values[0].likeStatus);
        setCourseDetail(values[1].payload);
        setIsEnroll(values[2].payload.isUserOwnCourse);
      })
      .catch((err) => {
        snContext.snackbar.set(true);
        snContext.snackbar.setData(`${err.response.status} - ${err.response.data.message}`);
      });
    snContext.loading.set(false);
  };

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
      await paymentApi.enrollFreeCourse({ courseId: course.id });
      snContext.snackbar.set(true);
      snContext.snackbar.setData(`Enroll success!`);
      setIsEnroll(!isEnroll);
    } catch (err) {
      snContext.snackbar.set(true);
      snContext.snackbar.setData(`${err.response.status} - ${err.response.data.message}`);
    }
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
      setUriVideo(videoId.toString());
    } else setUriVideo(value);
  };
  return (
    <Layout level="2" style={styles.layout}>
      {typeVideo === 1 ? (
        <Video ref={playerRef} style={styles.video} source={{ uri: uriVideo }} useNativeControls resizeMode="cover" />
      ) : (
        <YoutubePlayer ref={playerRef} height={250} play={playing} videoId={uriVideo} onChangeState={onStateChange} />
      )}

      <ScrollView>
        <View style={styles.container}>
          <View style={styles.body}>
            <Text numberOfLines={3} category="h3">
              {course.title}
            </Text>
            <CoursesInfoRow item={course} navigation={navigation} clickHandlerAuthor={clickHandlerAuthor} />
            <View style={styles.buttonsGroup}>
              <ButtonTitleIcon
                onPress={wishListHandler}
                title="Wishlist"
                status={isLike && 'danger'}
                nameIcon={isLike ? 'heart' : 'heart-outline'}
              />
              <ButtonTitleIcon
                onPress={enrollHandler}
                title="Enroll"
                status={isEnroll && 'success'}
                nameIcon={isEnroll ? 'book-open' : 'book-open-outline'}
              />
              <ButtonTitleIcon title="Share" nameIcon="share-outline" />
            </View>
            <ContentDropdown height={50}>
              <Text>{course.description}</Text>
              <Text category="s1">Learn What:</Text>
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
                  courses: courseDetail.coursesLikeCategory,
                })
              }
              appearance="outline"
              status="control"
              nameIcon="pantone-outline"
            >
              View related courses
            </ButtonLeftIcon>
            <ButtonLeftIcon
              onPress={() => clickHandlerAuthor(course)}
              appearance="outline"
              status="control"
              nameIcon="checkmark-circle-outline"
            >
              View related courses by '{course['instructor.user.name']}''
            </ButtonLeftIcon>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          {courseDetail && (
            <TabNavigation.Navigator tabBar={(props) => <TopTabBar {...props} />} initialRouteName="Contents">
              <TabNavigation.Screen
                name="Contents"
                children={() => (
                  <Contents course={courseDetail} isEnroll={isEnroll} uriVideoHandler={uriVideoHandler} />
                )}
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
});

export default CourseDetail;
