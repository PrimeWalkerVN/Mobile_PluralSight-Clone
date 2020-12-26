import { Layout } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import SectionCourse from '../../Main/Home/SectionCourse';

const LearningCourses = (props) => {
  const { courses, navigation } = props;

  const [items, setItems] = useState([]);

  useEffect(() => {
    const array = courses.map((item) => {
      return {
        id: item.id,
        title: item.courseTitle,
        price: item.coursePrice,
        description: item.instructorName,
        soldNumber: item.courseSoldNumber,
        averagePoint: item.courseAveragePoint,
        formalityPoint: item.courseFormalityPoint,
        contentPoint: item.courseContentPoint,
        presentationPoint: item.coursePresentationPoint,
        imageUrl: item.courseImage,
        ratedNumber: 0,
        videoNumber: 0,
        instructorId: item.instructorId,
        'instructor.user.name': item.instructorName,
      };
    });
    setItems(array);
  }, [courses]);
  return (
    <Layout level="2" style={styles.container}>
      <SectionCourse title="Your wish list" navigation={navigation} data={items} />
    </Layout>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
});
export default LearningCourses;
