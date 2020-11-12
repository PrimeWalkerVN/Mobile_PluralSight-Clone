import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CourseDetail from '../../CourseDetail/CourseDetail';
import Home from '../Home/Home';
import HeaderTop from './HeaderTop';
import HeaderTopTab from './HeaderTopTab';
import Profile from '../../AccountManagement/Profile';
import Setting from '../../AccountManagement/Setting';
// Home screen
const HomeScreen = {
  Detail: CourseDetail,
  Profile,
  Settings: Setting,
};

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" mode="modal">
      {Object.entries({
        ...HomeScreen,
      }).map(([name, component]) => (
        <Stack.Screen key={name} name={name} component={component} options={HeaderTopTab} />
      ))}
      <Stack.Screen name="Home" component={Home} options={HeaderTop} />
    </Stack.Navigator>
  );
};
export default HomeStack;
