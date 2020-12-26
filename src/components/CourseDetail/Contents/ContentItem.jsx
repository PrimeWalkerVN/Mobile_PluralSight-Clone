import { Icon, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import timeConvert from '../../../utils/utils';

const ContentItem = (props) => {
  const { item, onClickHandler } = props;
  return (
    <TouchableOpacity onPress={() => onClickHandler(item.videoUrl)}>
      <View style={styles.container}>
        <View style={styles.areaTitle}>
          <View style={styles.icon}>
            <Icon fill="black" style={{ height: 10, width: 10 }} name="checkmark-outline" />
          </View>
          <View>
            <Text category="s1">{item.name}</Text>
          </View>
        </View>
        <View>
          <Text category="c1">{timeConvert(item.hours)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  icon: {
    width: 15,
    backgroundColor: 'green',
    borderRadius: 15,
    height: 15,
    marginRight: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  areaTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
});
export default ContentItem;
