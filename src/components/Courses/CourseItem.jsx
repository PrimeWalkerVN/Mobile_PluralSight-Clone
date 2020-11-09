import { StyleService, useStyleSheet } from '@ui-kitten/components';
import React from 'react';
import { Image, View } from 'react-native';
import CoursesInfo from './CoursesInfo';

const CourseItem = (props) => {
  const styles = useStyleSheet(themedStyles);
  const { item } = props;
  return (
    <View style={styles.container} key={item.id}>
      <Image source={require('../../../assets/courses/angular.jpg')} style={styles.image} />
      <CoursesInfo item={item} />
    </View>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    height: 100,
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    backgroundColor: 'color-basic-700',
  },
  image: {
    width: 100,
    height: 80,
    resizeMode: 'cover',
  },
});
export default CourseItem;
