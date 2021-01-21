import { Text } from '@ui-kitten/components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import navNames from '../../../constants/navNames';
import SectionCourseItem from './SectionCourseItem';

const SectionCourse = (props) => {
  const { title, navigation, data } = props;
  const { t } = useTranslation();
  const renderListItems = (items) =>
    items.map((item) => <SectionCourseItem navigation={navigation} key={item.id} item={item} />);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={() => navigation.navigate(navNames.seeAll, { title, courses: data })}>
          <Text>
            {t('seeAllButton')} {`>`}
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal>{data && renderListItems(data.slice(0, 5))}</ScrollView>
      <View />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  header: {
    margin: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default SectionCourse;
