import { Text } from '@ui-kitten/components';
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Stars from '../Common/Stars';
import TagAvatarButton from '../Common/TagAvatarButton';

const CoursesInfoRow = (props) => {
  const { item } = props;
  return (
    <View style={styles.container}>
      <View style={styles.scrollTag}>
        <ScrollView horizontal>
          <TagAvatarButton title={item.author} />
          <TagAvatarButton title="Joe Eames" />
        </ScrollView>
      </View>
      <View style={styles.infoArea}>
        <Text category="s1">
          {item.level} - {item.released} - {item.duration}
        </Text>
        <Stars value={3} maxValue={5} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  infoArea: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  scrollTag: {
    marginVertical: 10,
  },
});
export default CoursesInfoRow;
