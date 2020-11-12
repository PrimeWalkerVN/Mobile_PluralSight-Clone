import { Avatar, Icon, Layout, MenuItem, OverflowMenu, Text } from '@ui-kitten/components';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

const HeaderTop = (props) => {
  const { navigation, route } = props;
  const [menuVisible, setMenuVisible] = useState(false);
  const renderMenuAction = () => (
    <TouchableWithoutFeedback onPress={toggleMenu}>
      <Icon style={styles.icon} fill="#8F9BB3" name="more-vertical" />
    </TouchableWithoutFeedback>
  );
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return {
    title: <Text category="h5">{route.name}</Text>,
    headerBackground: () => <Layout style={{ flex: 1 }} />,
    headerRight: () => (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
          }}
        >
          <Avatar style={styles.avatar} source={require('../../../../assets/avatar.jpeg')} />
        </TouchableOpacity>
        <OverflowMenu anchor={renderMenuAction} visible={menuVisible} onBackdropPress={toggleMenu}>
          <MenuItem
            onPress={() => {
              navigation.navigate('Settings');
              toggleMenu();
            }}
            title="Settings"
          />
          <MenuItem title="About" />
        </OverflowMenu>
      </View>
    ),
  };
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  avatar: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
});
export default HeaderTop;
