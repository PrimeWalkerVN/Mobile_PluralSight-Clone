import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ImageButtonSmall = (props) => {
  const { title } = props;
  return (
    <ImageBackground style={styles.button} source={require('../../../assets/imageButtons/imageDark.jpg')}>
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
    width: 200,
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
