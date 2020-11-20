import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CourseDetail from '../../CourseDetail/CourseDetail';
import Home from '../Home/Home';
import HeaderTop from './HeaderTop';
import HeaderTopTab from './HeaderTopTab';
import Profile from '../../AccountManagement/Profile';
import Setting from '../../AccountManagement/Setting';
import navNames from '../../../constants/navNames';
// Home screen
const HomeScreen = {
  [navNames.courseDetail]: CourseDetail,
  [navNames.profile]: Profile,
  [navNames.setting]: Setting,
};

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={navNames.home} mode="modal">
      {Object.entries({
        ...HomeScreen,
      }).map(([name, component]) => (
        <Stack.Screen key={name} name={name} component={component} options={HeaderTopTab} />
      ))}
      <Stack.Screen name={navNames.home} component={Home} options={HeaderTop} />
    </Stack.Navigator>
  );
};
export default HomeStack;
