import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import FlatListCourse from '../../Courses/FlatListCourse';

const ResultCourses = (props) => {
  const { navigation, data } = props;

  return (
    <Layout style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text category="h6" style={styles.title}>
          {data !== undefined ? data.data.length : 0} results
        </Text>
        <View style={styles.container}>
          {data !== undefined && <FlatListCourse items={data.data} navigation={navigation} />}
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
export default ResultCourses;
