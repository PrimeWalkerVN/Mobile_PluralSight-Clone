import { Text } from '@ui-kitten/components';
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const AvatarLargeV2 = (props) => {
  const { name } = props;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../../assets/avatar.jpeg')} />
      <Text category="h6" numberOfLines={2}>
        {name}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    marginHorizontal: 10,
    borderRadius: 500,
    resizeMode: 'contain',
  },
});

export default AvatarLargeV2;
