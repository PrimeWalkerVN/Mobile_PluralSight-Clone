import { Layout, Text } from '@ui-kitten/components';
import React, { useContext, useEffect, useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import coursesApi from '../../../api/coursesApi';
import { SnackBarContext } from '../../../context/SnackBarContext';
import { UserContext } from '../../../context/UserContext';
import SectionCourse from './SectionCourse';

const Home = (props) => {
  const { navigation } = props;
  const snContext = useContext(SnackBarContext);
  const userContext = useContext(UserContext);
  const [newCourses, setNewCourses] = useState([]);
  const [topCourses, setTopCourses] = useState([]);
  const [rateCourses, setRateCourses] = useState([]);
  const [userCourses, setUserCourses] = useState([]);

  const getData = async () => {
    const user = userContext.user.get;

    const params = {
      limit: 10,
      page: 1,
    };
    const params2 = {
      userId: user.id,
    };
    const resTop = coursesApi.getTopSellCourses(params);
    const resNew = coursesApi.getTopNewCourses(params);
    const resRate = coursesApi.getTopRateCourses(params);
    const resUser = coursesApi.getUserFavoriteCourses(params2);
    await Promise.all([resTop, resNew, resRate, resUser])
      .then((values) => {
        setNewCourses(values[0].payload);
        setTopCourses(values[1].payload);
        setRateCourses(values[2].payload);
        setUserCourses(values[3].payload);
      })
      .catch((err) => {
        snContext.snackbar.set(true);
        snContext.snackbar.setData(`${err.response.status} - ${err.response.data.message}`);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Layout level="2" style={styles.container}>
      <ScrollView>
        <View>
          <ImageBackground
            style={styles.header}
            source={require('../../../../assets/courses/pngTree.png')}
            imageStyle={styles.imageHeader}
          >
            <Text category="h5" style={styles.text}>
              Welcome to PluralSight!
            </Text>
            <Text category="s1">
              With PluralSight, you can build and apply skills in top technologies. You have free access to Skill IQ,
              Role IQ, a limited library of courses and a weekly rotation of new courses.
            </Text>
          </ImageBackground>
        </View>

        <SectionCourse title="Top New" navigation={navigation} data={newCourses} />
        <SectionCourse title="Top Sell " navigation={navigation} data={topCourses} />
        <SectionCourse title="Top Rate" navigation={navigation} data={rateCourses} />
        <SectionCourse title="User favorite categories" navigation={navigation} data={userCourses} />
      </ScrollView>
    </Layout>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 200,
    flex: 1,
    justifyContent: 'flex-end',
    margin: 5,
    padding: 10,
  },
  imageHeader: {
    height: 100,
    backgroundColor: 'black',
    resizeMode: 'contain',
    opacity: 1,
    marginRight: -250,
  },
  text: {
    marginBottom: 20,
  },
});
