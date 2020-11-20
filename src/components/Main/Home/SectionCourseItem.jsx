/* eslint-disable global-require */
import { StyleService, useStyleSheet } from '@ui-kitten/components';
import React from 'react';
import { Image, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CoursesInfo from '../../Courses/CoursesInfo';
import navNames from '../../../constants/navNames';

const SectionCourseItem = (props) => {
  const styles = useStyleSheet(themedStyles);
  const { item, navigation } = props;
  return (
    <TouchableOpacity onPress={() => navigation.navigate(navNames.courseDetail, { course: item })}>
      <View style={styles.container} key={item.id}>
        <Image source={require('../../../../assets/courses/angular.jpg')} style={styles.image} />
        <CoursesInfo item={item} />
      </View>
    </TouchableOpacity>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    margin: 5,
    width: 200,
    height: 200,
    overflow: 'hidden',
    borderRadius: 10,
    backgroundColor: 'color-basic-700',
  },
  image: {
    width: 200,
    height: 100,
    resizeMode: 'cover',
  },
});

export default SectionCourseItem;
