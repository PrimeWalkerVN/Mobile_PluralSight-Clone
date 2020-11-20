import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import navNames from '../../../constants/navNames';
import Profile from '../../AccountManagement/Profile';
import Setting from '../../AccountManagement/Setting';
import CourseDetail from '../../CourseDetail/CourseDetail';
import Search from '../Search/Search';
import HeaderTop from './HeaderTop';
import HeaderTopTab from './HeaderTopTab';
// Search screen
const SearchScreen = {
  [navNames.courseDetail]: CourseDetail,
  [navNames.profile]: Profile,
  [navNames.setting]: Setting,
};
const Stack = createStackNavigator();
const SearchStack = () => (
  <Stack.Navigator initialRouteName={navNames.search} mode="modal">
    {Object.entries({
      ...SearchScreen,
    }).map(([name, component]) => (
      <Stack.Screen key={name} name={name} component={component} options={HeaderTopTab} />
    ))}
    <Stack.Screen name={navNames.search} component={Search} options={HeaderTop} />
  </Stack.Navigator>
);
export default SearchStack;
