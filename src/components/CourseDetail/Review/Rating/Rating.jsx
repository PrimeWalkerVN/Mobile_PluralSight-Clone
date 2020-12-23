import { Layout } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProgressStar from './ProgessStar';
import RatingPoint from './RatingPoint';

const Rating = (props) => {
  const { ratings, averagePoint, contentPoint, formalityPoint, presentationPoint, ratedNumber } = props;
  return (
    <Layout style={styles.container} level="2">
      <RatingPoint
        averagePoint={Number.parseFloat(averagePoint).toFixed(1)}
        contentPoint={Number.parseFloat(contentPoint).toFixed(1)}
        ratedNumber={ratedNumber}
        formalityPoint={Number.parseFloat(formalityPoint).toFixed(1)}
        presentationPoint={Number.parseFloat(presentationPoint).toFixed(1)}
      />
      <View style={styles.bar}>
        {ratings !== null &&
          ratings.stars.map((value, index) => <ProgressStar key={index} value={value} index={index + 1} />)}
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    flexDirection: 'row',
  },
  bar: {
    flex: 0.8,
    justifyContent: 'space-between',
  },
});
export default Rating;
