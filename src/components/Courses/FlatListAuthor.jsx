import React from 'react';
import { FlatList } from 'react-native';
import AuthorItem from './AuthorItem';

const FlatListAuthor = (props) => {
  const { items, navigation } = props;

  return (
    <FlatList
      data={items}
      renderItem={({ item }) => <AuthorItem navigation={navigation} item={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default FlatListAuthor;
