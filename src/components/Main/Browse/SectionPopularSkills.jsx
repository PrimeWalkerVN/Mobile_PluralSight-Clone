import { Text } from '@ui-kitten/components';
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import TagButton from '../../Common/TagButton';

const SectionPopularSkill = () => {
  return (
    <View style={styles.container}>
      <Text category="h6">Popular skills</Text>
      <View style={styles.listTags}>
        <ScrollView horizontal>
          <TagButton title="Angular" />
          <TagButton title="Javascript" />
          <TagButton title="C#" />
          <TagButton title="Java" />
          <TagButton title="Angular" />
          <TagButton title="Angular" />
          <TagButton title="Angular" />
          <TagButton title="Angular" />
          <TagButton title="Angular" />
          <TagButton title="Angular" />
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 100,
    marginTop: 10,
  },
  listTags: {
    margin: 5,
    marginTop: 10,
  },
});

export default SectionPopularSkill;
