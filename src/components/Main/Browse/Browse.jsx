import { Layout } from '@ui-kitten/components';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import navNames from '../../../constants/navNames';
import ImageButton from '../../Common/ImageButton';
import SectionButtons from './SectionButtons';
import SectionPaths from './SectionPaths/SectionPaths';
import SectionPopularSkills from './SectionPopularSkills';
import TopAuthors from './TopAuthors/TopAuthors';

const Browse = (props) => {
  const { navigation } = props;
  return (
    <Layout style={styles.container}>
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
        <SectionPopularSkills />
        <SectionPaths navigation={navigation} />
        <TopAuthors navigation={navigation} />
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
