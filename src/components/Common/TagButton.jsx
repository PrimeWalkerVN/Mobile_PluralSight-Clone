import { Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../../constants/colors';

const TagButton = (props) => {
  const { title } = props;
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 30,
    backgroundColor: colors.tag,
    borderRadius: 20,
    margin: 5,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    padding: 5,
  },
});

export default TagButton;
