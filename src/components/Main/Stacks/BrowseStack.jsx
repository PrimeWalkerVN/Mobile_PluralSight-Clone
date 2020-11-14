import { createStackNavigator } from '@react-navigation/stack';
import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import CourseDetail from '../../CourseDetail/CourseDetail';
import Browse from '../Browse/Browse';
import HeaderTop from './HeaderTop';
import HeaderTopTab from './HeaderTopTab';
// Browse screen
const BrowseScreen = {
  Detail: CourseDetail,
};
const Stack = createStackNavigator();
const BrowseStack = () => (
  <Stack.Navigator initialRouteName="Browse" mode="modal">
    {Object.entries({
      ...BrowseScreen,
    }).map(([name, component]) => (
      <Stack.Screen key={name} name={name} component={component} options={HeaderTopTab} />
    ))}
    <Stack.Screen name="Browse" component={Browse} options={HeaderTop} />
  </Stack.Navigator>
);
export default BrowseStack;
