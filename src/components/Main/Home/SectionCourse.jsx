import { Text } from '@ui-kitten/components';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import SectionCourseItem from './SectionCourseItem';

const SectionCourse = (props) => {
  const { title } = props;
  const courses = [
    {
      id: 1,
      title: 'Angular',
      author: 'Chi Thanh',
      level: 'Advance',
      released: 'May 6, 2020',
      duration: '3 h',
    },
    {
      id: 2,
      title: 'React native',
      author: 'Chi Thanh',
      level: 'Advance',
      released: 'May 6, 2020',
      duration: '3 h',
    },
    {
      id: 3,
      title: 'Android',
      author: 'Chi Thanh',
      level: 'Advance',
      released: 'May 6, 2020',
      duration: '3 h',
    },
  ];
  const renderListItems = (items) => items.map((item) => <SectionCourseItem key={item.id} item={item} />);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity>
          <Text>See all {`>`}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal>{renderListItems(courses)}</ScrollView>
      <View />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  header: {
    margin: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default SectionCourse;
