import { Icon, MenuItem, OverflowMenu, StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import React, { useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

const ContentHeader = (props) => {
  const styles = useStyleSheet(themedStyles);
  const { title, order } = props;
  const [menuVisible, setMenuVisible] = useState(false);

  const renderMenuAction = () => (
    <TouchableWithoutFeedback onPress={toggleMenu}>
      <Icon style={styles.icon} fill="#8F9BB3" name="more-vertical" />
    </TouchableWithoutFeedback>
  );
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Text category="h6">{order}</Text>
        <View style={styles.status} />
      </View>
      <View style={styles.info}>
        <Text category="h6">{title.title}</Text>
        <Text>{title.duration}</Text>
      </View>
      <OverflowMenu anchor={renderMenuAction} visible={menuVisible} onBackdropPress={toggleMenu}>
        <MenuItem title="About" />
        <MenuItem title="About" />
      </OverflowMenu>
    </View>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    flex: 1,
    marginHorizontal: 10,
    alignSelf: 'stretch',
    justifyContent: 'space-around',
  },
  image: {
    width: 80,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#424242',
  },
  icon: {
    width: 30,
    height: 30,
  },
  status: {
    height: 10,
    width: '100%',
    marginTop: 10,
    backgroundColor: '#7C7C7C',
  },
});
export default ContentHeader;
