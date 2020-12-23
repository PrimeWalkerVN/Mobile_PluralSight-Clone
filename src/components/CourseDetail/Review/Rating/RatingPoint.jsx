import { Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const RatingPoint = (props) => {
  const { ratedNumber, averagePoint, contentPoint, formalityPoint, presentationPoint } = props;
  return (
    <View styles={styles.container}>
      <Text category="h1" style={styles.text}>
        {averagePoint}
      </Text>
      <Text category="h6" style={styles.text}>
        ({ratedNumber} votes)
      </Text>
      <Text category="s2" style={styles.text}>
        {formalityPoint} formality point
      </Text>
      <Text category="s2" style={styles.text}>
        {presentationPoint} presentation point
      </Text>
      <Text category="s2" style={styles.text}>
        {contentPoint} content point
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    flexDirection: 'column',
  },
  text: {
    textAlign: 'center',
    marginTop: 5,
  },
});
export default RatingPoint;
