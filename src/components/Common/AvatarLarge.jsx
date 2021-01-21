import { Avatar, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const AvatarLarge = (props) => {
  const { name, image } = props;
  return (
    <View style={styles.container}>
      {image && <Avatar size="giant" style={styles.image} source={{ uri: image }} />}
      <Text numberOfLines={1} category="s1">
        {name}
      </Text>
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
    marginBottom: 10,
  },
});

export default AvatarLarge;
