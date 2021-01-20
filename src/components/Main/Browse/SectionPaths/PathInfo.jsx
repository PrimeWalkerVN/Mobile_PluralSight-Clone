import { Text } from '@ui-kitten/components';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import moment from 'moment';
import formats from '../../../../constants/formats';

const PathInfo = (props) => {
  const { item } = props;
  return (
    <View style={styles.infoArea}>
      <Text style={styles.title} category="s1">
        {item.name}
      </Text>
      <Text category="c1" numberOfLines={1}>
        {moment(item.updatedAt).format(formats.dateTime)}
      </Text>
      <Text category="c1">3 courses</Text>
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
