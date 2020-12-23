import { Layout } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Rating from './Rating/Rating';
import RatingList from './RatingList/RatingList';

const Review = (props) => {
  const { course } = props;
  return (
    <Layout style={styles.container} level="2">
      {course && (
        <View>
          <Rating
            ratings={course.ratings}
            ratedNumber={course.ratedNumber}
            averagePoint={course.averagePoint}
            formalityPoint={course.formalityPoint}
            contentPoint={course.contentPoint}
            presentationPoint={course.presentationPoint}
          />

          <RatingList list={course.ratings.ratingList} />
        </View>
      )}
    </Layout>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Review;
