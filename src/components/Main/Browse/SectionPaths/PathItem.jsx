/* eslint-disable global-require */
import { Layout, StyleService, useStyleSheet } from '@ui-kitten/components';
import React from 'react';
import { Image } from 'react-native';
import PathInfo from './PathInfo';

const PathItem = (props) => {
  const styles = useStyleSheet(themedStyles);
  const { item } = props;
  return (
    <Layout style={styles.container}>
      <Image source={require('../../../../../assets/courses/angular.jpg')} style={styles.image} />
      <PathInfo item={item} />
    </Layout>
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
  },
  image: {
    width: 200,
    height: 100,
    resizeMode: 'cover',
  },
});

export default PathItem;
