import { StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import React from 'react';
import { SectionList, View } from 'react-native';
import CourseItem from './CourseItem';

export default function ListCourses(props) {
  const { data } = props;
  const styles = useStyleSheet(themedStyles);
  return (
    <SectionList
      style={styles.container}
      sections={data}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <CourseItem item={item} />}
      renderSectionHeader={({ section: { title, data } }) => (
        <View style={styles.header}>
          <Text category="h5">{title}</Text>
          <Text category="p2">{data.length} Results</Text>
        </View>
      )}
    />
  );
}
const themedStyles = StyleService.create({
  header: {
    backgroundColor: 'color-basic-800',
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
});
