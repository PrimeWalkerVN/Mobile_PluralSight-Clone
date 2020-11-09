import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ImageButtonSmall from '../../Common/ImageButtonSmall';

const SectionButtons = () => {
  return (
    <ScrollView horizontal>
      <View style={styles.listButton}>
        <View style={styles.row}>
          <ImageButtonSmall title="CONFERENCE" />
          <ImageButtonSmall title="SOFTWARE" />
        </View>
        <View style={styles.row}>
          <ImageButtonSmall title="CONFERENCE" />
          <ImageButtonSmall title="SOFTWARE" />
        </View>
      </View>
      <View style={styles.listButton}>
        <View style={styles.row}>
          <ImageButtonSmall title="CONFERENCE" />
          <ImageButtonSmall title="SOFTWARE" />
        </View>
        <View style={styles.row}>
          <ImageButtonSmall title="CONFERENCE" />
          <ImageButtonSmall title="SOFTWARE" />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  listButton: {
    height: 180,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
});
export default SectionButtons;
