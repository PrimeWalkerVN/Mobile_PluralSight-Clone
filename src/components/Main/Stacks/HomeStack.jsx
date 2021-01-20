import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import navNames from '../../../constants/navNames';
import ChangePassword from '../../AccountManagement/ChangePassword';
import ChangeProfile from '../../AccountManagement/ChangeProfile';
import Profile from '../../AccountManagement/Profile';
import Setting from '../../AccountManagement/Setting';
import Author from '../../Authors/Author';
import CourseDetail from '../../CourseDetail/CourseDetail';
import Home from '../Home/Home';
import SeeAll from '../Home/SeeAll';
import HeaderTop from './TopBarOption/HeaderTop';
import HeaderTopTab from './TopBarOption/HeaderTopTab';
import NoTitleTopBar from './TopBarOption/NoTitleTopBar';
// Home screen
const HomeScreen = {
  [navNames.courseDetail]: CourseDetail,
  [navNames.profile]: Profile,
  [navNames.setting]: Setting,
  [navNames.changePassword]: ChangePassword,
  [navNames.changeProfile]: ChangeProfile,
  [navNames.author]: Author,
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
      <Stack.Screen name={navNames.seeAll} component={SeeAll} options={NoTitleTopBar} />
    </Stack.Navigator>
  );
};
export default HomeStack;
