import { Layout, StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import React from 'react';
import { SectionList, View } from 'react-native';
import AuthorItem from './AuthorItem';
import CourseItem from './CourseItem';
import PathItemRow from './PathItemRow';

export default function ListCourses(props) {
  const { data, navigation } = props;
  const styles = useStyleSheet(themedStyles);
  return (
    <Layout style={{ flex: 1 }}>
      <SectionList
        style={styles.container}
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item, section: { title } }) => {
          if (title === 'Courses') return <CourseItem item={item} navigation={navigation} />;
          if (title === 'Paths') return <PathItemRow item={item} navigation={navigation} />;
          if (title === 'Authors') return <AuthorItem item={item} navigation={navigation} />;
          return <Text>Empty</Text>;
        }}
        renderSectionHeader={({ section: { title, data } }) => (
          <View style={styles.header}>
            <Text category="h5">{title}</Text>
            <Text category="p2">
              {data.length} Results {'>'}
            </Text>
          </View>
        )}
      />
    </Layout>
  );
}
const themedStyles = StyleService.create({
  header: {
    backgroundColor: 'color-basic-800',
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
});
