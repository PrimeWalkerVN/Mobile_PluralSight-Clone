import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Button, Layout, Tab, TabBar, Text } from '@ui-kitten/components';
import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import usersApi from '../../api/usersApi';
import navNames from '../../constants/navNames';
import { SnackBarContext } from '../../context/SnackBarContext';
import { UserContext } from '../../context/UserContext';
import AvatarLargeV2 from '../Common/AvatarLargeV2';
import LearningCourses from './Tabs/LearningCourses';
import LikeCourses from './Tabs/LikeCourses';

export default function Profile(props) {
  const { navigation } = props;
  const context = useContext(UserContext);
  const user = context.user.get;
  const snContext = useContext(SnackBarContext);

  const [wishList, setWishList] = useState([]);
  const [learningCourse, setLearningCourse] = useState([]);

  const Content = (props) => {
    const { label, sub } = props;
    return (
      <View style={styles.content}>
        <Text category="h6">{label}</Text>
        <Text style={styles.subContent}>{sub}</Text>
      </View>
    );
  };

  const getData = async () => {
    snContext.loading.set(true);
    const resWish = usersApi.getWishList();
    const resLearning = usersApi.getLearningCourses();

    await Promise.all([resWish, resLearning])
      .then((values) => {
        setWishList(values[0].payload);
        setLearningCourse(values[1].payload);
      })
      .catch((err) => {
        snContext.snackbar.set(true);
        snContext.snackbar.setData(`${err.response.status} - ${err.response.data.message}`);
      });
    snContext.loading.set(false);
  };
  useEffect(() => {
    getData();
  }, []);

  const TopTabBar = ({ navigation, state }) => (
    <TabBar
      selectedIndex={state.index}
      onSelect={(index) => {
        navigation.navigate(state.routeNames[index]);
      }}
    >
      <Tab title="WISHLIST" />
      <Tab title="LEARNING" />
    </TabBar>
  );
  const TabNavigation = createMaterialTopTabNavigator();
  return (
    <Layout level="2" style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <AvatarLargeV2 name={user && user.email} image={user.avatar} />
        </View>
        <Button onPress={() => navigation.navigate(navNames.changePassword)} size="small" style={styles.button}>
          Change password
        </Button>
        <Button onPress={() => navigation.navigate(navNames.changeProfile)} size="small" style={styles.button}>
          Change profile
        </Button>
        <View style={styles.body}>
          <Content label="FullName:" sub={user.name} />
          <Content label="Created at:" sub={moment(user.createdAt).fromNow()} />
          <Content label="Phone Number:" sub={user.phone} />
          <Content label="Type:" sub={user.type} />
          <Content label="Point:" sub={user.point} />
        </View>
        <TabNavigation.Navigator tabBar={(props) => <TopTabBar {...props} />} initialRouteName="Contents">
          <TabNavigation.Screen
            name="WishList"
            children={() => <LikeCourses courses={wishList} navigation={navigation} />}
          />
          <TabNavigation.Screen
            name="Learning"
            children={() => <LearningCourses courses={learningCourse} navigation={navigation} />}
          />
        </TabNavigation.Navigator>
      </ScrollView>
    </Layout>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  body: {
    marginHorizontal: 10,
    marginVertical: 20,
    flex: 1,
  },
  content: {
    marginVertical: 10,
  },
  subContent: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
