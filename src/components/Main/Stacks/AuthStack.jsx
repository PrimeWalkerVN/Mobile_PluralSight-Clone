import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import navNames from '../../../constants/navNames';
import ForgetPassword from '../../Authentication/ForgetPassword';
import Login from '../../Authentication/Login';
import Register from '../../Authentication/Register';
import VerifyPassword from '../../Authentication/VerifyPassword';
import HeaderTopTab from './TopBarOption/HeaderTopTab';
// Home screen
const AuthScreen = {
  [navNames.login]: Login,
  [navNames.register]: Register,
  [navNames.verifyPassword]: VerifyPassword,
  [navNames.forgetPassword]: ForgetPassword,
};

const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={navNames.login} mode="modal">
      {Object.entries({
        ...AuthScreen,
      }).map(([name, component]) => (
        <Stack.Screen key={name} name={name} component={component} options={HeaderTopTab} />
      ))}
    </Stack.Navigator>
  );
};
export default AuthStack;
