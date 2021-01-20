import { Layout, Text } from '@ui-kitten/components';
import moment from 'moment';
import React, { useEffect } from 'react';
import { LogBox, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import formats from '../../constants/formats';
import FlatListCourse from '../Courses/FlatListCourse';

const PathDetail = (props) => {
  const { navigation } = props;
  const { cate, courses } = props.route.params;

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  return (
    <Layout style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text category="h5" numberOfLines={2} ellipsizeMode="tail">
              {cate.name}
            </Text>
            <Text category="p2">{moment(cate.updatedAt).format(formats.dateTime)}</Text>
          </View>

          <View style={styles.label}>
            <Text style={styles.title}>Courses</Text>
            <Text>{courses ? courses.length : 0} result</Text>
          </View>
          <FlatListCourse items={courses} navigation={navigation} />
        </View>
      </ScrollView>
    </Layout>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    display: 'flex',
    marginVertical: 10,
    alignItems: 'center',
  },
  label: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    marginVertical: 20,
  },
  titlePath: {
    overflow: 'hidden',
  },
});
export default PathDetail;
