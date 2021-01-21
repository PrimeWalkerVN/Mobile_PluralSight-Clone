import { Avatar, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const AvatarLargeV2 = (props) => {
  const { name, image } = props;
  return (
    <View style={styles.container}>
      <Avatar size="giant" style={styles.image} source={{ uri: image || null }} />
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
    marginHorizontal: 10,
  },
});

export default AvatarLargeV2;
