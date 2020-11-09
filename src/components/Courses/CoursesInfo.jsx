import { Text } from '@ui-kitten/components';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Stars from '../Common/Stars';

const CoursesInfo = (props) => {
  const { item } = props;
  return (
    <View style={styles.infoArea}>
      <Text category="h6">{item.title}</Text>
      <Text category="c1">{item.author}</Text>
      <Text category="c1">
        {item.level} - {item.released} - {item.duration}
      </Text>
      <Stars value={3} maxValue={5} />
    </View>
  );
};
const styles = StyleSheet.create({
  infoArea: {
    flex: 1,
    justifyContent: 'space-between',
    margin: 10,
  },
});
export default CoursesInfo;
