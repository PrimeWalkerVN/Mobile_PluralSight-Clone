import React from 'react';
import { StyleSheet, View } from 'react-native';
import ListCourses from '../../Courses/ListCourses';
import SearchBar from './SearchBar';

export default function Search() {
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
    <View style={styles.container}>
      <SearchBar />
      <ListCourses data={courses} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
