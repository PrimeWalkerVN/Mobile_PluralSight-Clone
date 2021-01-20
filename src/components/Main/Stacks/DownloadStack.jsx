import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import navNames from '../../../constants/navNames';
import Profile from '../../AccountManagement/Profile';
import Setting from '../../AccountManagement/Setting';
import CourseDetail from '../../CourseDetail/CourseDetail';
import Download from '../Download/Download';
import HeaderTop from './TopBarOption/HeaderTop';
import HeaderTopTab from './TopBarOption/HeaderTopTab';
// Download screen
const DownloadScreen = {
  [navNames.courseDetail]: CourseDetail,
  [navNames.profile]: Profile,
  [navNames.setting]: Setting,
};
const Stack = createStackNavigator();
const DownloadStack = () => (
  <Stack.Navigator initialRouteName={navNames.download} mode="modal">
    {Object.entries({
      ...DownloadScreen,
    }).map(([name, component]) => (
      <Stack.Screen key={name} name={name} component={component} options={HeaderTopTab} />
    ))}
    <Stack.Screen name={navNames.download} component={Download} options={HeaderTop} />
  </Stack.Navigator>
);
export default DownloadStack;
