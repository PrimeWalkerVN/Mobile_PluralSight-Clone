import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ImageButtonSmall from '../../Common/ImageButtonSmall';

const SectionButtons = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View style={styles.listButton}>
          <ImageButtonSmall title="CONFERENCE" />
          <ImageButtonSmall title="SOFTWARE" />
          <ImageButtonSmall title="CONFERENCE" />
          <ImageButtonSmall title="SOFTWARE" />
          <ImageButtonSmall title="CONFERENCE" />
          <ImageButtonSmall title="SOFTWARE" />
          <ImageButtonSmall title="CONFERENCE" />
          <ImageButtonSmall title="SOFTWARE" />
          <ImageButtonSmall title="CONFERENCE" />
          <ImageButtonSmall title="SOFTWARE" />
          <ImageButtonSmall title="CONFERENCE" />
          <ImageButtonSmall title="SOFTWARE" />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 180,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  listButton: {
    height: 180,
    flexWrap: 'wrap',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
});
export default SectionButtons;
