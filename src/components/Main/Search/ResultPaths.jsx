import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import FlatListPath from '../../Courses/FlatListPath';

const ResultPaths = (props) => {
  const { navigation } = props;
  const paths = [
    {
      id: 1,
      title: 'Angular',
      coursesNumber: 10,
    },
    {
      id: 2,
      title: 'React native',
      coursesNumber: 10,
    },
    {
      id: 3,
      title: 'Android',
      coursesNumber: 10,
    },
  ];
  return (
    <Layout style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>{paths.length} results</Text>
        <View style={styles.container}>
          <FlatListPath items={paths} navigation={navigation} />
        </View>
      </View>
    </Layout>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  list: {
    marginVertical: 20,
  },
});
export default ResultPaths;
