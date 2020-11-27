import { Text } from '@ui-kitten/components';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import navNames from '../../../../constants/navNames';
import PathItem from './PathItem';

const SectionPaths = (props) => {
  const { navigation } = props;
  const paths = [
    {
      id: 1,
      title: 'Microsoft Azure Administrator(AZ-104)',
      coursesNumber: 3,
      duration: '3h',
    },
    {
      id: 2,
      title: 'Google Cloud Administrator(AZ-104)',
      coursesNumber: 4,
      duration: '4h',
    },
    {
      id: 3,
      title: 'Frontend Professional (VIP)',
      coursesNumber: 11,
      duration: '20h',
    },
    {
      id: 4,
      title: 'Microsoft Azure Administrator(AZ-104)',
      coursesNumber: 3,
      duration: '3h',
    },
    {
      id: 5,
      title: 'Microsoft Azure Administrator(AZ-104)',
      coursesNumber: 3,
      duration: '3h',
    },
    {
      id: 6,
      title: 'Microsoft Azure Administrator(AZ-104)',
      coursesNumber: 3,
      duration: '3h',
    },
    {
      id: 7,
      title: 'Microsoft Azure Administrator(AZ-104)',
      coursesNumber: 3,
      duration: '3h',
    },
  ];
  const renderListItems = (items) =>
    items.map((item) => (
      <TouchableOpacity key={item.id} onPress={() => navigation.navigate(navNames.pathDetail, { path: item })}>
        <PathItem item={item} />
      </TouchableOpacity>
    ));
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text category="h6" numberOfLines={2}>
          Paths
        </Text>
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
