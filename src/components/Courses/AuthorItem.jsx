import { Avatar, StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import navNames from '../../constants/navNames';

const AuthorItem = (props) => {
  const styles = useStyleSheet(themedStyles);
  const { item, navigation } = props;

  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate(navNames.author, { author: item })}>
      <View style={styles.container} key={item.id}>
        <Avatar size="giant" source={require('../../../assets/avatar.jpeg')} />
        <View style={styles.info}>
          <Text category="h6">{item.name}</Text>
          <Text category="p2">{item.coursesNumber} courses</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    borderRadius: 10,
    backgroundColor: 'color-basic-700',
  },
  image: {
    width: 100,
    height: 80,
    resizeMode: 'cover',
  },
  info: {
    flex: 1,
    marginHorizontal: 20,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
export default AuthorItem;
