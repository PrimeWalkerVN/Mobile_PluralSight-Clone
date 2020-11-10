import { Text } from '@ui-kitten/components';
import React from 'react';
import { View, StyleSheet } from 'react-native';

const PathInfo = (props) => {
  const { item } = props;
  return (
    <View style={styles.infoArea}>
      <Text style={styles.title} category="s1">
        {item.title}
      </Text>
      <Text category="c1">{item.coursesNumber} courses</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  infoArea: {
    flex: 1,
    justifyContent: 'space-between',
    margin: 10,
  },
  title: {
    fontWeight: 'bold',
  },
});
export default PathInfo;
