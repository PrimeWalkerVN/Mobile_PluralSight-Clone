import { Text } from '@ui-kitten/components';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import PathItem from './PathItem';

const SectionPaths = () => {
  const paths = [
    {
      id: 1,
      title: 'Microsoft Azure Administrator(AZ-104)',
      coursesNumber: 3,
    },
    {
      id: 2,
      title: 'Microsoft Azure Administrator(AZ-104)',
      coursesNumber: 3,
    },
    {
      id: 3,
      title: 'Microsoft Azure Administrator(AZ-104)',
      coursesNumber: 3,
    },
    {
      id: 4,
      title: 'Microsoft Azure Administrator(AZ-104)',
      coursesNumber: 3,
    },
  ];
  const renderListItems = (items) => items.map((item) => <PathItem key={item.id} item={item} />);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text category="h6">Paths</Text>
        <TouchableOpacity>
          <Text>See all {`>`}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal>{renderListItems(paths)}</ScrollView>
      <View />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 250,
  },
  header: {
    marginHorizontal: 5,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default SectionPaths;