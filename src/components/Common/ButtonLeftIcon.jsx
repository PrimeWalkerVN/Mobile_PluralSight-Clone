import { Button, Icon } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';

const ButtonLeftIcon = (props) => {
  const { nameIcon } = props;
  const renderIcon = (props) => <Icon {...props} name={nameIcon} />;
  return (
    <Button style={styles.container} {...props} accessoryLeft={renderIcon}>
      {props.children}
    </Button>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});

export default ButtonLeftIcon;
