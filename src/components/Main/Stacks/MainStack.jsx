import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import navNames from '../../../constants/navNames';
import SplashScreen from '../../Others/SplashScreen';
import Main from '../Main';
import AuthStack from './AuthStack';
// Home screen
const MainScreen = {
  [navNames.auth]: AuthStack,
  [navNames.mainTab]: Main,
  [navNames.splash]: SplashScreen,
};

const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName={navNames.auth}>
      {Object.entries({
        ...MainScreen,
      }).map(([name, component]) => (
        <Stack.Screen key={name} name={name} component={component} options={{ headerShown: false }} />
      ))}
    </Stack.Navigator>
  );
};
export default MainStack;
