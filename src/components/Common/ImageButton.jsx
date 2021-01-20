import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ImageButton = (props) => {
  const { title, onPressHandler, image } = props;
  return (
    <ImageBackground style={styles.button} source={image}>
      <TouchableOpacity style={styles.touch} onPress={onPressHandler}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 100,
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

export default ImageButton;
