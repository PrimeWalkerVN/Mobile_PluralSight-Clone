import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import FlatListAuthor from '../../Courses/FlatListAuthor';

const ResultAuthors = (props) => {
  const { navigation } = props;
  const authors = [
    {
      id: 1,
      name: 'Chi Thanh',
      coursesNumber: 10,
    },
    {
      id: 2,
      name: 'Chi Thanh',
      coursesNumber: 10,
    },
    {
      id: 3,
      name: 'Chi Thanh',
      coursesNumber: 10,
    },
  ];
  return (
    <Layout style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>{authors.length} results</Text>
        <View style={styles.container}>
          <FlatListAuthor items={authors} navigation={navigation} />
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
export default ResultAuthors;
