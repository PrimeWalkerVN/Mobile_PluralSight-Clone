import React from 'react';
import { FlatList } from 'react-native';
import PathItemRow from './PathItemRow';

const FlatListPath = (props) => {
  const { items, navigation } = props;

  return (
    <FlatList
      data={items}
      renderItem={({ item }) => <PathItemRow navigation={navigation} item={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default FlatListPath;
