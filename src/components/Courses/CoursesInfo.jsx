import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import moment from 'moment';
import Stars from '../Common/Stars';
import formats from '../../constants/formats';

const formatString = formats.dateTime;
const CoursesInfo = (props) => {
  const { item } = props;
  return (
    <Layout style={styles.infoArea}>
      <Text numberOfLines={1} category="label">
        {item.title}
      </Text>
      <Text category="c1">{item['instructor.user.name']}</Text>
      <Text category="c1" numberOfLines={1}>
        {item.videoNumber} - {moment(item.updatedAt).format(formatString)} - {item.totalHours} h
      </Text>
      <Stars value={3} maxValue={5} />
      <View style={styles.meta}>
        <Text status="success" category="s1">
          Free
        </Text>
        <Text category="c1"> {item.soldNumber} Members</Text>
      </View>
    </Layout>
  );
};
const styles = StyleSheet.create({
  infoArea: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 5,
  },
  meta: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default CoursesInfo;
