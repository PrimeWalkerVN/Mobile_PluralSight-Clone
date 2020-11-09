import { Icon, Input } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

const SearchBar = () => {
  const renderIcon = (props) => (
    <TouchableWithoutFeedback>
      <Icon {...props} name="search-outline" />
    </TouchableWithoutFeedback>
  );
  return (
    <View style={styles.container}>
      <Input placeholder="Search here" accessoryRight={renderIcon} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 50,
    margin: 10,
  },
});
export default SearchBar;
