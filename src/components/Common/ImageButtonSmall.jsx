import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ImageButtonSmall = (props) => {
  const { title } = props;
  const { width } = Dimensions.get('window');
  return (
    <ImageBackground
      style={[styles.button, { width: width / 2 - 10 }]}
      source={require('../../../assets/imageButtons/imageDark.jpg')}
    >
      <TouchableOpacity style={styles.touch}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 80,
    margin: 5,
  },
  touch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ImageButtonSmall;
