import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import FlatListCourse from '../../Courses/FlatListCourse';

const ResultCourses = (props) => {
  const { navigation } = props;
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
  return (
    <Layout style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>{courses.length} results</Text>
        <View style={styles.container}>
          <FlatListCourse items={courses} navigation={navigation} />
        </View>
      </View>
    </Layout>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  list: {
    marginVertical: 20,
  },
});
export default ResultCourses;
