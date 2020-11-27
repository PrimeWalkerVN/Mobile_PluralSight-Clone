/* eslint-disable global-require */
import { StyleService, useStyleSheet } from '@ui-kitten/components';
import React from 'react';
import { Dimensions, Image, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import navNames from '../../../constants/navNames';
import CoursesInfo from '../../Courses/CoursesInfo';

const SectionCourseItem = (props) => {
  const styles = useStyleSheet(themedStyles);
  const { item, navigation } = props;
  const { width } = Dimensions.get('window');

  return (
    <TouchableOpacity onPress={() => navigation.navigate(navNames.courseDetail, { course: item })}>
      <View style={[styles.container, { width: width / 2 - 10 }]} key={item.id}>
        <Image
          source={require('../../../../assets/courses/angular.jpg')}
          style={[styles.image, { width: width / 2 - 10 }]}
        />
        <CoursesInfo item={item} />
      </View>
    </TouchableOpacity>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    margin: 5,
    height: 200,
    overflow: 'hidden',
    borderRadius: 10,
    backgroundColor: 'color-basic-700',
  },
  image: {
    height: 100,
    resizeMode: 'cover',
  },
});

export default SectionCourseItem;
