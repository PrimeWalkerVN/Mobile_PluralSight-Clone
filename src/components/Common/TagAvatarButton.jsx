import { Avatar, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../constants/colors';

const TagAvatarButton = (props) => {
  const { title, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Avatar size="tiny" style={styles.image} source={require('../../../assets/avatar.jpeg')} />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 30,
    backgroundColor: colors.tag,
    borderRadius: 50,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
    justifyContent: 'flex-start',
    padding: 5,
  },
  image: {
    marginRight: 10,
    borderRadius: 50,
  },
});

export default TagAvatarButton;
