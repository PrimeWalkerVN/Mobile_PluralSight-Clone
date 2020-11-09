/* eslint-disable global-require */
import { StyleService, useStyleSheet } from '@ui-kitten/components';
import React from 'react';
import { Image, View } from 'react-native';
import CoursesInfo from '../../Courses/CoursesInfo';

const SectionCourseItem = (props) => {
  const styles = useStyleSheet(themedStyles);
  const { item } = props;
  return (
    <View style={styles.container} key={item.id}>
      <Image source={require('../../../../assets/courses/angular.jpg')} style={styles.image} />
      <CoursesInfo item={item} />
    </View>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    margin: 5,
    width: 200,
    height: 200,
    backgroundColor: 'color-basic-700',
  },
  image: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
});

export default SectionCourseItem;
