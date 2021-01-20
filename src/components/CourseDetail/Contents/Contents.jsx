import { Divider, Layout } from '@ui-kitten/components';
import React, { useContext, useEffect, useState } from 'react';
import { SectionList, StyleSheet, View } from 'react-native';
import { SnackBarContext } from '../../../context/SnackBarContext';
import ContentHeader from './ContentHeader';
import ContentItem from './ContentItem';

const Contents = (props) => {
  const { course, isEnroll, uriVideoHandler, lessonActive, setLessonActive } = props;
  const { section } = course;
  const [data, setData] = useState([]);
  const snContext = useContext(SnackBarContext);

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
  }, [section]);

  const onClickHandler = (item) => {
    if (isEnroll) {
      setLessonActive(item);
      uriVideoHandler(item.videoUrl);
    } else {
      snContext.snackbar.set(true);
      snContext.snackbar.setData(`you have not taken this course!`);
    }
  };
  return (
    <Layout style={{ flex: 1 }} level="2">
      <View style={styles.container}>
        <SectionList
          sections={data}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <ContentItem lessonActive={lessonActive} item={item} onClickHandler={onClickHandler} />
          )}
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
