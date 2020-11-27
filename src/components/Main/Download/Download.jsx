import { Button, Layout, Text } from '@ui-kitten/components';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import FlatListCourse from '../../Courses/FlatListCourse';

export default function Download(props) {
  const { navigation } = props;
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'Android',
      author: 'Chi Thanh',
      level: 'Advance',
      released: 'May 6, 2020',
      duration: '3 h',
    },
    {
      id: 2,
      title: 'Angular',
      author: 'PrimeWalker',
      level: 'Advance',
      released: 'March 6, 2020',
      duration: '4 h',
    },
    {
      id: 3,
      title: 'React',
      author: 'Chi Thanh',
      level: 'Advance',
      released: 'May 10, 2020',
      duration: '3 h',
    },
    {
      id: 4,
      title: 'Android',
      author: 'Chi Thanh',
      level: 'Advance',
      released: 'May 6, 2020',
      duration: '3 h',
    },
    {
      id: 5,
      title: 'Android',
      author: 'Chi Thanh',
      level: 'Advance',
      released: 'May 6, 2020',
      duration: '3 h',
    },
    {
      id: 6,
      title: 'Android',
      author: 'Chi Thanh',
      level: 'Advance',
      released: 'May 6, 2020',
      duration: '3 h',
    },
    {
      id: 7,
      title: 'Android',
      author: 'Chi Thanh',
      level: 'Advance',
      released: 'May 6, 2020',
      duration: '3 h',
    },
    {
      id: 8,
      title: 'Android',
      author: 'Chi Thanh',
      level: 'Advance',
      released: 'May 6, 2020',
      duration: '3 h',
    },
    {
      id: 9,
      title: 'Android',
      author: 'Chi Thanh',
      level: 'Advance',
      released: 'May 6, 2020',
      duration: '3 h',
    },
    {
      id: 10,
      title: 'Android',
      author: 'Chi Thanh',
      level: 'Advance',
      released: 'May 6, 2020',
      duration: '3 h',
    },
  ]);

  const removeAllHandler = () => {
    setCourses([]);
  };
  return (
    <Layout style={styles.container}>
      <View style={styles.header}>
        <Text category="h6">1 courses (72MB)</Text>
        <Button onPress={removeAllHandler} appearance="ghost" size="large">
          REMOVE ALL
        </Button>
      </View>
      <FlatListCourse items={courses} navigation={navigation} />
    </Layout>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginHorizontal: 5,
    marginVertical: 30,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
