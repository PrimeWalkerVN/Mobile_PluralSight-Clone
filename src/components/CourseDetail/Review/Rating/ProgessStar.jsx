import { Icon, Text } from '@ui-kitten/components';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import * as Progress from 'react-native-progress';

export const IconStar = () => <Icon style={styles.icon} fill="orange" name="star" />;
const ProgressStar = (props) => {
  const { index, value } = props;
  const { width } = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <Text>{index}</Text>
      <IconStar />
      <Progress.Bar style={styles.bar} progress={value / 100} unfilledColor="transparent" width={width / 3 - 20} />
      <Text>{value}%</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  icon: {
    width: 20,
    height: 20,
  },
  bar: {
    marginHorizontal: 10,
  },
});

export default ProgressStar;
