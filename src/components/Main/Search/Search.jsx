import { Layout } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';
import ListCourses from '../../Courses/ListCourses';
import SearchBar from './SearchBar';

export default function Search(props) {
  const { navigation } = props;
  const courses = [
    {
      title: 'courses',
      data: [
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
      ],
    },
    {
      title: 'Paths',
      data: [
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
      ],
    },
    {
      title: 'Authors',
      data: [
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
      ],
    },
  ];

  return (
    <Layout style={styles.container}>
      <SearchBar />
      <ListCourses data={courses} navigation={navigation} />
    </Layout>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
