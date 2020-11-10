import { Text } from '@ui-kitten/components';
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const AvatarSmallV2 = (props) => {
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
    height: 50,
    width: 130,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
    resizeMode: 'contain',
  },
});

export default AvatarSmallV2;
