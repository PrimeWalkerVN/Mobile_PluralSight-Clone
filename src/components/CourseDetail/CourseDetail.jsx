import { Layout, Tab, TabBar, Text } from '@ui-kitten/components';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Alert, ScrollView, StyleSheet, View, LogBox } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import YoutubePlayer from 'react-native-youtube-iframe';
import ButtonLeftIcon from '../Common/ButtonLeftIcon';
import ButtonTitleIcon from '../Common/ButtonTitleIcon';
import ContentDropdown from '../Common/ContentDropdown';
import Contents from './Contents/Contents';
import Transcript from './Transcript/Transcript';
import CoursesInfoRow from './CourseInfoRow';
import usersApi from '../../api/usersApi';
import { SnackBarContext } from '../../context/SnackBarContext';
import Review from './Review/Review';
import coursesApi from '../../api/coursesApi';

const CourseDetail = (props) => {
  const { course } = props.route.params;
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef();
  const snContext = useContext(SnackBarContext);
  const [courseDetail, setCourseDetail] = useState(null);

  const [isLike, setIsLike] = useState(false);
  const [isEnroll, setIsEnroll] = useState(false);

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
    getData();
  }, []);

  const getData = async () => {
    try {
      const resLikeStatus = await usersApi.getCourseLikeStatus({ courseId: course.id });
      setIsLike(resLikeStatus.likeStatus);
      const resDetail = await coursesApi.getCourseDetail({ id: course.id, userId: course.id });
      setCourseDetail(resDetail.payload);
    } catch (err) {
      snContext.snackbar.set(true);
      snContext.snackbar.setData(`${err.response.status} - ${err.response.data.message}`);
    } finally {
      snContext.loading.set(false);
    }
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

  const enrollHandler = () => {
    setIsEnroll(!isEnroll);
  };
  return (
    <Layout level="2" style={styles.layout}>
      <YoutubePlayer ref={playerRef} height={250} play={playing} videoId="iee2TATGMyI" onChangeState={onStateChange} />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.body}>
            <Text numberOfLines={3} category="h3">
              {course.title}
            </Text>
            <CoursesInfoRow item={course} />
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
            </ContentDropdown>

            <ButtonLeftIcon appearance="outline" status="control" nameIcon="pantone-outline">
              View related courses
            </ButtonLeftIcon>
            <ButtonLeftIcon appearance="outline" status="control" nameIcon="checkmark-circle-outline">
              View related courses by '{course['instructor.user.name']}''
            </ButtonLeftIcon>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          {courseDetail && (
            <TabNavigation.Navigator tabBar={(props) => <TopTabBar {...props} />} initialRouteName="Contents">
              <TabNavigation.Screen name="Contents" children={() => <Contents course={courseDetail} />} />
              <TabNavigation.Screen name="Review" children={() => <Review course={courseDetail} />} />
              <TabNavigation.Screen name="Transcript" children={() => <Transcript course={courseDetail} />} />
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
});

export default CourseDetail;
