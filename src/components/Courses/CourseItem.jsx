import { Icon, Layout, MenuItem, OverflowMenu, StyleService, useStyleSheet } from '@ui-kitten/components';
import React, { useState } from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import navNames from '../../constants/navNames';
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
    <Layout style={styles.container} key={item.id}>
      <TouchableOpacity style={styles.row} onPress={() => navigation.navigate(navNames.courseDetail, { course: item })}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <CoursesInfo item={item} />
      </TouchableOpacity>
      <OverflowMenu anchor={renderMenuAction} visible={menuVisible} onBackdropPress={toggleMenu}>
        <MenuItem title="About" />
        <MenuItem title="About" />
      </OverflowMenu>
    </Layout>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 5,
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
