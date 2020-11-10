import React from 'react';
import { FlatList } from 'react-native';
import CourseItem from './CourseItem';

const FlatListCourse = (props) => {
  const { items } = props;

  return (
    <FlatList data={items} renderItem={({ item }) => <CourseItem item={item} />} keyExtractor={(item) => item.id} />
  );
};

export default FlatListCourse;
