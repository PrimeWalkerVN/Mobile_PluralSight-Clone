import { Text } from '@ui-kitten/components';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

const TagAvatarButton = (props) => {
  const { title } = props;
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={require('../../../assets/avatar.jpeg')} />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 30,
    backgroundColor: '#8F9BB3',
    borderRadius: 50,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
    justifyContent: 'flex-start',
    padding: 5,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
    borderRadius: 50,
    resizeMode: 'contain',
  },
});

export default TagAvatarButton;
