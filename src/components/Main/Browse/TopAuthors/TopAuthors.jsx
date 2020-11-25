import { Text } from '@ui-kitten/components';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import navNames from '../../../../constants/navNames';
import AvatarLarge from '../../../Common/AvatarLarge';

const TopAuthors = (props) => {
  const { navigation } = props;
  const authors = [
    {
      id: 1,
      name: 'Avatar',
      avatar: '',
    },
    {
      id: 2,
      name: 'Naruto',
      avatar: '',
    },
    {
      id: 3,
      name: 'Thanh',
      avatar: '',
    },
    {
      id: 4,
      name: 'Sasuke',
      avatar: '',
    },
    {
      id: 5,
      name: 'Avatar',
      avatar: '',
    },
    {
      id: 6,
      name: 'Avatar',
      avatar: '',
    },
    {
      id: 7,
      name: 'Avatar',
      avatar: '',
    },
  ];

  const renderItem = (items) =>
    items.map((item) => (
      <TouchableOpacity key={item.id} onPress={() => navigation.navigate(navNames.author, { author: item })}>
        <AvatarLarge name={item.name} />
      </TouchableOpacity>
    ));
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text category="h6">Top Authors</Text>
      </View>
      <ScrollView horizontal>{renderItem(authors)}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
  },
  header: {
    marginVertical: 10,
  },
});
export default TopAuthors;
