import { Button, Icon, Text } from '@ui-kitten/components';
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const ButtonTitleIcon = (props) => {
  const { title, nameIcon, onPress, status } = props;
  const renderIcon = (props) => <Icon {...props} name={nameIcon} />;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerButton}>
        <Button
          style={styles.button}
          onPress={onPress}
          appearance="outline"
          status={status || 'control'}
          accessoryLeft={renderIcon}
        />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerButton: {
    width: 50,
    height: 50,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 10,
  },
});

export default ButtonTitleIcon;
