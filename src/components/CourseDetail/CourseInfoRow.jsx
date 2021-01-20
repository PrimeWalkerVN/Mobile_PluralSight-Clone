import { Text } from '@ui-kitten/components';
import moment from 'moment';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import formats from '../../constants/formats';
import Stars from '../Common/Stars';
import TagAvatarButton from '../Common/TagAvatarButton';

const CoursesInfoRow = (props) => {
  const { item, clickHandlerAuthor } = props;

  return (
    <View style={styles.container}>
      <View style={styles.scrollTag}>
        <ScrollView horizontal>
          <TagAvatarButton title={item['instructor.user.name']} onPress={() => clickHandlerAuthor(item)} />
        </ScrollView>
      </View>
      <View style={styles.infoArea}>
        <Text category="h6">
          {item.videoNumber} videos - {moment(item.updatedAt).format(formats.dateTime)} - {item.totalHours} h
        </Text>
        <View>
          <Stars
            value={Number.parseInt((item.formalityPoint + item.contentPoint + item.presentationPoint) / 3)}
            maxValue={5}
          />
        </View>
        <View style={styles.meta}>
          {item.price > 0 ? (
            <Text status="warning">
              {item.price.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
              })}
            </Text>
          ) : (
            <Text status="success" category="h6">
              Free
            </Text>
          )}
          <Text category="s1" numberOfLines={1}>
            {item.soldNumber} Members
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoArea: {
    flex: 1,
    alignItems: 'center',
    margin: 5,
  },
  scrollTag: {
    marginVertical: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  meta: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default CoursesInfoRow;
