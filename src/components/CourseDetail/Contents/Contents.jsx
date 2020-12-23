import { Divider, Layout } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { SectionList, StyleSheet, View } from 'react-native';
import ContentHeader from './ContentHeader';
import ContentItem from './ContentItem';

const Contents = (props) => {
  const { course } = props;
  const { section } = course;
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = section.map((item) => {
      return {
        id: item.id,
        order: item.numberOrder,
        title: item.name,
        sumHours: item.sumHours,
        data: item.lesson,
      };
    });
    setData(newData);
  }, []);
  return (
    <Layout style={{ flex: 1 }} level="2">
      <View style={styles.container}>
        <SectionList
          sections={data}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <ContentItem item={item} />}
          renderSectionHeader={({ section }) => (
            <View>
              <Divider />
              <ContentHeader title={section.title} sumHours={section.sumHours} order={section.order} />
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
