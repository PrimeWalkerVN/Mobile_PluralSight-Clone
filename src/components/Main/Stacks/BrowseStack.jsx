import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import navNames from '../../../constants/navNames';
import Profile from '../../AccountManagement/Profile';
import Setting from '../../AccountManagement/Setting';
import Author from '../../Authors/Author';
import CourseDetail from '../../CourseDetail/CourseDetail';
import PathDetail from '../../PathDetail/PathDetail';
import Browse from '../Browse/Browse';
import HeaderTop from './TopBarOption/HeaderTop';
import HeaderTopTab from './TopBarOption/HeaderTopTab';
// Browse screen
const BrowseScreen = {
  [navNames.courseDetail]: CourseDetail,
  [navNames.profile]: Profile,
  [navNames.setting]: Setting,
  [navNames.author]: Author,
  [navNames.pathDetail]: PathDetail,
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
