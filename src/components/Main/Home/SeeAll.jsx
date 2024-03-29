import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';
import FlatListCourse from '../../Courses/FlatListCourse';

const SeeAll = (props) => {
  const { title, courses } = props.route.params;
  const { navigation } = props;
  return (
    <Layout level="2" style={{ flex: 1 }}>
      <Text style={styles.title} category="h3">
        {title}
      </Text>
      {courses.length > 0 ? (
        <FlatListCourse items={courses} navigation={navigation} />
      ) : (
        <Text style={styles.text}>No Information</Text>
      )}
    </Layout>
  );
};
const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  text: {
    textAlign: 'center',
    margin: 10,
  },
});
export default SeeAll;
