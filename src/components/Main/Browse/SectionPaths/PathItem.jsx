/* eslint-disable global-require */
import { StyleService, useStyleSheet } from '@ui-kitten/components';
import React from 'react';
import { Image, View } from 'react-native';
import PathInfo from './PathInfo';

const PathItem = (props) => {
  const styles = useStyleSheet(themedStyles);
  const { item } = props;
  return (
    <View style={styles.container}>
      <Image source={require('../../../../../assets/courses/angular.jpg')} style={styles.image} />
      <PathInfo item={item} />
    </View>
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

export default PathItem;