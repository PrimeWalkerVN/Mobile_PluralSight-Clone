import { Icon } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Stars = (props) => {
  const { value, maxValue } = props;
  const noneStar = maxValue - value;

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < value; i++) {
      stars.push(<Icon fill="orange" name="star" />);
    }
    return stars.map((item, index) => (
      <View key={index} style={styles.icon}>
        {item}
      </View>
    ));
  };
  const renderNoneStars = () => {
    const stars = [];
    for (let i = 0; i < noneStar; i++) {
      stars.push(<Icon fill="gray" name="star-outline" />);
    }
    return stars.map((item, index) => (
      <View key={index + value} style={styles.icon}>
        {item}
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      {renderStars()}
      {renderNoneStars()}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default Stars;
