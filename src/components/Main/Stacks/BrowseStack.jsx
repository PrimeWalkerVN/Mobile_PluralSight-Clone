import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import navNames from '../../../constants/navNames';
import Profile from '../../AccountManagement/Profile';
import Setting from '../../AccountManagement/Setting';
import CourseDetail from '../../CourseDetail/CourseDetail';
import Browse from '../Browse/Browse';
import HeaderTop from './HeaderTop';
import HeaderTopTab from './HeaderTopTab';
// Browse screen
const BrowseScreen = {
  [navNames.courseDetail]: CourseDetail,
  [navNames.profile]: Profile,
  [navNames.setting]: Setting,
};
const Stack = createStackNavigator();
const BrowseStack = () => (
  <Stack.Navigator initialRouteName={navNames.browse} mode="modal">
    {Object.entries({
      ...BrowseScreen,
    }).map(([name, component]) => (
      <Stack.Screen key={name} name={name} component={component} options={HeaderTopTab} />
    ))}
    <Stack.Screen name={navNames.browse} component={Browse} options={HeaderTop} />
  </Stack.Navigator>
);
export default BrowseStack;
