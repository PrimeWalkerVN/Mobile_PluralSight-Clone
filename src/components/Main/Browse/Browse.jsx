import { Text } from '@ui-kitten/components';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ImageButton from '../../Common/ImageButton';
import SectionButtons from './SectionButtons';
import SectionPaths from './SectionPaths/SectionPaths';
import SectionPopularSkills from './SectionPopularSkills';
import TopAuthors from './TopAuthors/TopAuthors';

const Browse = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <ImageButton title="NEW RELEASES" />
        <ImageButton title="RECOMMENDED FOR YOU" />
      </View>
      <SectionButtons />
      <SectionPopularSkills />
      <SectionPaths />
      <TopAuthors />
    </ScrollView>
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
