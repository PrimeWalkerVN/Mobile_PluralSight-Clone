import { Icon, MenuItem, OverflowMenu, StyleService, useStyleSheet } from '@ui-kitten/components';
import React, { useState } from 'react';
import { Image, TouchableWithoutFeedback, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CoursesInfo from './CoursesInfo';

const CourseItem = (props) => {
  const styles = useStyleSheet(themedStyles);
  const { item, navigation } = props;
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
    <TouchableOpacity onPress={() => navigation.navigate('Detail', { course: item })}>
      <View style={styles.container} key={item.id}>
        <Image source={require('../../../assets/courses/angular.jpg')} style={styles.image} />
        <CoursesInfo item={item} />
        <OverflowMenu anchor={renderMenuAction} visible={menuVisible} onBackdropPress={toggleMenu}>
          <MenuItem title="About" />
          <MenuItem title="About" />
        </OverflowMenu>
      </View>
    </TouchableOpacity>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 5,
    height: 100,
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
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
