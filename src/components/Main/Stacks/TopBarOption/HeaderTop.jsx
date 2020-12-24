import { Avatar, Icon, Layout, MenuItem, OverflowMenu, Text } from '@ui-kitten/components';
import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import navNames from '../../../../constants/navNames';
import { UserContext } from '../../../../context/UserContext';

const HeaderTop = (props) => {
  const { navigation, route } = props;
  const [menuVisible, setMenuVisible] = useState(false);
  const context = useContext(UserContext);
  const user = context.user.get;
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
    headerBackground: () => <Layout level="2" style={{ flex: 1 }} />,
    headerRight: () => (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(navNames.profile);
          }}
        >
          {user !== null && <Avatar style={styles.avatar} source={{ uri: user.avatar }} />}
        </TouchableOpacity>
        <OverflowMenu anchor={renderMenuAction} visible={menuVisible} onBackdropPress={toggleMenu}>
          <MenuItem
            onPress={() => {
              navigation.navigate(navNames.setting);
              toggleMenu();
            }}
            title={navNames.setting}
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
