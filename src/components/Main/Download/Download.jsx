import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import FlatListCourse from '../../Courses/FlatListCourse';

export default function Download(props) {
  const { navigation } = props;
  const courses = [
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
      title: 'Android',
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
  ];
  return (
    <Layout style={styles.container}>
      <View style={styles.header}>
        <Text category="h6">1 courses (72MB)</Text>
        <Text category="h6" status="info">
          REMOVE ALL
        </Text>
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
