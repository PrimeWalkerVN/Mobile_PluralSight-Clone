import { Layout } from '@ui-kitten/components';
import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import categoryApi from '../../../api/categoryApi';
import coursesApi from '../../../api/coursesApi';
import instructorsApi from '../../../api/instructorsApi';
import navNames from '../../../constants/navNames';
import { SnackBarContext } from '../../../context/SnackBarContext';
import { UserContext } from '../../../context/UserContext';
import ImageButton from '../../Common/ImageButton';
import SectionPaths from './SectionPaths/SectionPaths';
import SectionPopularSkills from './SectionPopularSkills';
import TopAuthors from './TopAuthors/TopAuthors';

const Browse = (props) => {
  const { navigation } = props;
  const snContext = useContext(SnackBarContext);
  const userContext = useContext(UserContext);

  const [authors, setAuthors] = useState([]);
  const [cates, setCates] = useState([]);

  const getData = async () => {
    const resAuthor = instructorsApi.getInstructors();
    const resCate = categoryApi.getAllCategory();
    await Promise.all([resAuthor, resCate])
      .then((values) => {
        setAuthors(values[0].payload);
        setCates(values[1].payload);
      })
      .catch((err) => {
        snContext.snackbar.set(true);
        snContext.snackbar.setData(`${err.response.status} - ${err.response.data.message}`);
      });
    snContext.loading.set(false);
  };
  useEffect(() => {
    snContext.loading.set(true);
    getData();
  }, []);

  const newRelease = async () => {
    try {
      snContext.loading.set(true);
      const res = await coursesApi.getTopNewCourses({ limit: 15, page: 1 });
      navigation.navigate(navNames.browseDetail, {
        image: require('../../../../assets/imageButtons/imageDark.jpg'),
        title: 'NEW RELEASES',
        data: res.payload,
      });
    } catch (err) {
      snContext.snackbar.set(true);
      if (err.response) snContext.snackbar.setData(`${err.response.status} - ${err.response.data.message}`);
    } finally {
      snContext.loading.set(false);
    }
  };

  const recommendCourse = async () => {
    try {
      snContext.loading.set(true);
      const user = userContext.user.get;
      const res = await coursesApi.getUserFavoriteCourses({ userId: user.id });
      navigation.navigate(navNames.browseDetail, {
        image: require('../../../../assets/imageButtons/imageDark.jpg'),
        title: 'RECOMMENDED FOR YOU',
        data: res.payload,
      });
    } catch (err) {
      snContext.snackbar.set(true);
      if (err.response) snContext.snackbar.setData(`${err.response.status} - ${err.response.data.message}`);
    } finally {
      snContext.loading.set(false);
    }
  };
  return (
    <Layout level="2" style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <ImageButton
            onPressHandler={newRelease}
            title="NEW RELEASES"
            image={require('../../../../assets/imageButtons/imageDark.jpg')}
          />
          <ImageButton
            onPressHandler={recommendCourse}
            title="RECOMMENDED FOR YOU"
            image={require('../../../../assets/imageButtons/imageDark.jpg')}
          />
        </View>

        <TopAuthors navigation={navigation} data={authors} />
        <SectionPopularSkills data={cates} navigation={navigation} />
        <SectionPaths navigation={navigation} data={cates} />
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 200,
    marginBottom: 10,
  },
});
export default Browse;
