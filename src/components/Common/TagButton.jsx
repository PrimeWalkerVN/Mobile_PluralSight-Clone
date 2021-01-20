import { Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../constants/colors';

const TagButton = (props) => {
  const { title, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
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
