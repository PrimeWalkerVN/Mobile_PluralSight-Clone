import React from 'react';
import { FlatList } from 'react-native';
import CourseItem from './CourseItem';

const FlatListCourse = (props) => {
  const { items, navigation } = props;

  return (
    <FlatList
      data={items}
      renderItem={({ item }) => <CourseItem navigation={navigation} item={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default FlatListCourse;
