import { Text } from '@ui-kitten/components';
import React, { useContext } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import coursesApi from '../../../api/coursesApi';
import navNames from '../../../constants/navNames';
import { SnackBarContext } from '../../../context/SnackBarContext';
import TagButton from '../../Common/TagButton';

const SectionPopularSkill = (props) => {
  const { data, navigation } = props;
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
  return (
    <View style={styles.container}>
      <Text category="h6">Popular categories</Text>
      <View style={styles.listTags}>
        <ScrollView horizontal>
          {data.map((item, index) => (
            <TagButton onPress={() => handleDetail(item)} key={index} title={item.name} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 100,
    marginTop: 10,
    marginHorizontal: 5,
  },
  listTags: {
    margin: 5,
    marginTop: 10,
  },
});

export default SectionPopularSkill;
