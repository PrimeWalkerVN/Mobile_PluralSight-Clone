import { Divider, Layout } from '@ui-kitten/components';
import React from 'react';
import { SectionList, StyleSheet, View } from 'react-native';
import ContentHeader from './ContentHeader';
import ContentItem from './ContentItem';

const Contents = () => {
  const data = [
    {
      id: 1,
      title: {
        title: 'Course Overview',
        duration: '30:00',
      },
      data: [
        {
          id: 1,
          title: 'Introduction',
          duration: '15:00',
        },
        {
          id: 2,
          title: 'Introduction',
          duration: '15:00',
        },
        {
          id: 3,
          title: 'Introduction',
          duration: '15:00',
        },
        {
          id: 4,
          title: 'Introduction',
          duration: '15:00',
        },
      ],
    },
    {
      id: 2,
      title: {
        title: 'Course Overview',
        duration: '30:00',
      },
      data: [
        {
          id: 1,
          title: 'Introduction',
          duration: '15:00',
        },
        {
          id: 2,
          title: 'Introduction',
          duration: '15:00',
        },
        {
          id: 3,
          title: 'Introduction',
          duration: '15:00',
        },
        {
          id: 4,
          title: 'Introduction',
          duration: '15:00',
        },
      ],
    },
    {
      id: 3,
      title: {
        title: 'Course Overview',
        duration: '30:00',
      },
      data: [
        {
          id: 1,
          title: 'Introduction',
          duration: '15:00',
        },
        {
          id: 2,
          title: 'Introduction',
          duration: '15:00',
        },
        {
          id: 3,
          title: 'Introduction',
          duration: '15:00',
        },
        {
          id: 4,
          title: 'Introduction',
          duration: '15:00',
        },
      ],
    },
  ];
  return (
    <Layout level="2">
      <View style={styles.container}>
        <SectionList
          sections={data}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <ContentItem item={item} />}
          renderSectionHeader={({ section: { title, id } }) => (
            <View>
              <Divider />
              <ContentHeader title={title} order={id} />
            </View>
          )}
          nestedScrollEnabled={false}
          scrollEnabled={false}
        />
      </View>
    </Layout>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
});
export default Contents;
