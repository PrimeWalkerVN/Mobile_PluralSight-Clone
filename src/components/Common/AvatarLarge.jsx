import { Text } from '@ui-kitten/components';
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const AvatarLarge = (props) => {
  const { name } = props;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../../assets/avatar.jpeg')} />
      <Text category="s1">{name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 120,
    width: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginBottom: 10,
    resizeMode: 'contain',
  },
});

export default AvatarLarge;
