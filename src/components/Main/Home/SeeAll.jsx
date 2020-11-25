import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';
import FlatListCourse from '../../Courses/FlatListCourse';

const SeeAll = (props) => {
  const { title, courses } = props.route.params;
  return (
    <Layout style={{ flex: 1 }}>
      <Text style={styles.title} category="h2">
        {title}
      </Text>
      <FlatListCourse items={courses} />
    </Layout>
  );
};
const styles = StyleSheet.create({
  title: {
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
});
export default SeeAll;
