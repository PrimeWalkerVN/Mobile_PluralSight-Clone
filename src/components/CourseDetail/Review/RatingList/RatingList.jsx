import { Avatar, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import moment from 'moment';
import Stars from '../../../Common/Stars';
import formats from '../../../../constants/formats';

const renderItem = (item) => {
  return (
    <View key={item.id + item.updatedAt} style={styles.comment}>
      <View style={styles.commentAvatar}>
        <Avatar size="giant" source={{ uri: item.user.avatar }} />
        <Text style={styles.name} numberOfLines={2} category="label">
          {item.user.name}
        </Text>
      </View>
      <View style={styles.commentContent}>
        <View style={styles.row}>
          <Stars
            value={Number.parseInt((item.formalityPoint + item.contentPoint + item.presentationPoint) / 3)}
            maxValue={5}
          />
          <Text style={{ marginHorizontal: 10 }} category="s2">
            {moment(item.updatedAt).format(formats.dateTime)}
          </Text>
        </View>
        <Text style={styles.text} category="s1" numberOfLines={2}>
          {item.content}
        </Text>
      </View>
    </View>
  );
};

const RatingList = (props) => {
  const { list } = props;
  return <View style={styles.container}>{list !== null && list.map((item) => renderItem(item))}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  comment: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 10,
  },
  commentAvatar: {
    flex: 0.3,
    alignItems: 'center',
  },
  commentContent: {
    flex: 0.7,
    justifyContent: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    margin: 5,
    textAlign: 'center',
  },
  text: {
    margin: 5,
  },
});
export default RatingList;
