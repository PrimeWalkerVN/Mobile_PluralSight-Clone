import { Button, Icon } from '@ui-kitten/components';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

const ContentDropdown = (props) => {
  const [dropdown, setDropdown] = useState({ status: false, height: 50 });
  const renderIcon = (props) => (
    <Icon {...props} name={dropdown.status ? 'chevron-up-outline' : 'chevron-down-outline'} />
  );
  const changeDropdown = () => {
    const newHeight = dropdown.height ? null : 50;
    setDropdown({ status: !dropdown.status, height: newHeight });
  };
  return (
    <View style={stylesContainer(dropdown.height).container}>
      <View style={styles.content}>{props.children}</View>
      <Button
        onPress={changeDropdown}
        appearance="outline"
        status="control"
        style={styles.button}
        accessoryLeft={renderIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  content: {
    flex: 10,
    marginRight: 30,
  },
  button: {
    flex: 0.1,
  },
});

const stylesContainer = (height) =>
  StyleSheet.create({
    container: {
      height,
      marginVertical: 10,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'row',
    },
  });

export default ContentDropdown;
