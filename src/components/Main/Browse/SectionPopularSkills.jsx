import { Text } from '@ui-kitten/components';
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import TagButton from '../../Common/TagButton';

const SectionPopularSkill = (props) => {
  const { data } = props;
  return (
    <View style={styles.container}>
      <Text category="h6">Popular categories</Text>
      <View style={styles.listTags}>
        <ScrollView horizontal>
          {data.map((item, index) => (
            <TagButton key={index} title={item.name} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 100,
    marginTop: 10,
    marginHorizontal: 5,
  },
  listTags: {
    margin: 5,
    marginTop: 10,
  },
});

export default SectionPopularSkill;
