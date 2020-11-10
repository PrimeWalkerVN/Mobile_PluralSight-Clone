import { Icon, MenuItem, OverflowMenu, StyleService, useStyleSheet } from '@ui-kitten/components';
import React, { useState } from 'react';
import { Image, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import CoursesInfo from './CoursesInfo';

const CourseItem = (props) => {
  const styles = useStyleSheet(themedStyles);
  const { item } = props;
  const [menuVisible, setMenuVisible] = useState(false);

  const renderMenuAction = (props) => (
    <TouchableWithoutFeedback onPress={toggleMenu}>
      <Icon style={styles.icon} fill="#8F9BB3" name="more-vertical" />
    </TouchableWithoutFeedback>
  );
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <View style={styles.container} key={item.id}>
      <Image source={require('../../../assets/courses/angular.jpg')} style={styles.image} />
      <CoursesInfo item={item} />
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
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    height: 100,
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    backgroundColor: 'color-basic-700',
  },
  image: {
    width: 100,
    height: 80,
    resizeMode: 'cover',
  },
  icon: {
    width: 30,
    height: 30,
  },
});
export default CourseItem;
