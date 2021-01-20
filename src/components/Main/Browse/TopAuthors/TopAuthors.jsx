import { Text } from '@ui-kitten/components';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import navNames from '../../../../constants/navNames';
import AvatarLarge from '../../../Common/AvatarLarge';

const TopAuthors = (props) => {
  const { navigation, data } = props;
  const renderItem = (items) =>
    items.map((item) => (
      <TouchableOpacity key={item.id} onPress={() => navigation.navigate(navNames.author, { author: item })}>
        <AvatarLarge name={item['user.name']} image={item['user.avatar']} />
      </TouchableOpacity>
    ));
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text category="h6">Top Authors</Text>
      </View>
      <ScrollView horizontal>{renderItem(data)}</ScrollView>
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
