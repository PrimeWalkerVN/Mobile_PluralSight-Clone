import { Layout } from '@ui-kitten/components';
import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import categoryApi from '../../../api/categoryApi';
import instructorsApi from '../../../api/instructorsApi';
import navNames from '../../../constants/navNames';
import { SnackBarContext } from '../../../context/SnackBarContext';
import ImageButton from '../../Common/ImageButton';
import SectionButtons from './SectionButtons';
import SectionPaths from './SectionPaths/SectionPaths';
import SectionPopularSkills from './SectionPopularSkills';
import TopAuthors from './TopAuthors/TopAuthors';

const Browse = (props) => {
  const { navigation } = props;
  const snContext = useContext(SnackBarContext);

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
  return (
    <Layout level="2" style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <ImageButton
            onPressHandler={() =>
              navigation.navigate(navNames.browseDetail, {
                image: require('../../../../assets/imageButtons/imageDark.jpg'),
                title: 'NEW RELEASES',
              })
            }
            title="NEW RELEASES"
            image={require('../../../../assets/imageButtons/imageDark.jpg')}
          />
          <ImageButton
            onPressHandler={() =>
              navigation.navigate(navNames.browseDetail, {
                image: require('../../../../assets/imageButtons/imageDark.jpg'),
                title: 'RECOMMENDED FOR YOU',
              })
            }
            title="RECOMMENDED FOR YOU"
            image={require('../../../../assets/imageButtons/imageDark.jpg')}
          />
        </View>
        <SectionButtons />

        <TopAuthors navigation={navigation} data={authors} />
        <SectionPopularSkills data={cates} />
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
