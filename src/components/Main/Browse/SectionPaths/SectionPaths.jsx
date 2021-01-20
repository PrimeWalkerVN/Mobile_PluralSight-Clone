import { Text } from '@ui-kitten/components';
import React, { useContext } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import coursesApi from '../../../../api/coursesApi';
import navNames from '../../../../constants/navNames';
import { SnackBarContext } from '../../../../context/SnackBarContext';
import PathItem from './PathItem';

const SectionPaths = (props) => {
  const { navigation, data } = props;
  const snContext = useContext(SnackBarContext);
  const handleDetail = async (item) => {
    const params = { keyword: '', opt: { category: [item.id] }, limit: 12, offset: 0 };
    try {
      snContext.loading.set(true);
      const res = await coursesApi.searchCourse(params);
      navigation.navigate(navNames.pathDetail, { cate: item, courses: res.payload.rows });
    } catch (err) {
      snContext.snackbar.set(true);
      if (err.response) snContext.snackbar.setData(`${err.response.status} - ${err.response.data.message}`);
    } finally {
      snContext.loading.set(false);
    }
  };
  const renderListItems = (items) =>
    items.map((item) => (
      <TouchableOpacity key={item.id} onPress={() => handleDetail(item)}>
        <PathItem item={item} />
      </TouchableOpacity>
    ));
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text category="h6" numberOfLines={2}>
          Categories
        </Text>
        <TouchableOpacity>
          <Text>See all {`>`}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal>{renderListItems(data)}</ScrollView>
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
