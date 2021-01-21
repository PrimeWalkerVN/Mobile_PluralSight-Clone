import { Icon, StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import timeConvert from '../../../utils/utils';

const ContentItem = (props) => {
  const { item, onClickHandler, lessonActive } = props;
  const themeStyles = useStyleSheet(themedStyles);
  return (
    <TouchableOpacity onPress={() => onClickHandler(item)}>
      <View style={[styles.container, lessonActive && lessonActive.id === item.id && themeStyles.active]}>
        <View style={styles.areaTitle}>
          <View style={[styles.icon, item && item.isFinish && styles.active]}>
            <Icon fill="white" style={{ height: 10, width: 10 }} name="checkmark-outline" />
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
    padding: 5,
  },
  active: {
    backgroundColor: 'green',
  },
  icon: {
    width: 15,
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
const themedStyles = StyleService.create({
  active: {
    backgroundColor: 'color-basic-600',
  },
});
export default ContentItem;
