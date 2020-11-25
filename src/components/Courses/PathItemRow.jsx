import { StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import React from 'react';
import { Image, TouchableWithoutFeedback, View } from 'react-native';
import navNames from '../../constants/navNames';

const PathItemRow = (props) => {
  const styles = useStyleSheet(themedStyles);
  const { item, navigation } = props;

  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate(navNames.courseDetail, { course: item })}>
      <View style={styles.container} key={item.id}>
        <Image source={require('../../../assets/courses/angular.jpg')} style={styles.image} />
        <View style={styles.info}>
          <Text category="h6">{item.title}</Text>
          <Text category="p2">{item.coursesNumber} courses</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: 'color-basic-700',
  },
  image: {
    width: 100,
    height: 80,
    resizeMode: 'cover',
  },
  info: {
    marginHorizontal: 10,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
});
export default PathItemRow;
