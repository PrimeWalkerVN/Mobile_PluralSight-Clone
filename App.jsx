import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import Home from './src/components/Main/Home';

const App = () => (
  <View style={{ flex: 1 }}>
    <Home />
    <StatusBar style="auto" />
  </View>
);
export default App;
