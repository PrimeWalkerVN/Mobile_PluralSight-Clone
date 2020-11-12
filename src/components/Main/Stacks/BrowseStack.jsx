import { createStackNavigator } from '@react-navigation/stack';
import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import CourseDetail from '../../CourseDetail/CourseDetail';
import Browse from '../Browse/Browse';
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
    <Stack.Screen
      name="Browse"
      component={Browse}
      options={{
        title: <Text category="h5">Browse</Text>,
        headerBackground: () => <Layout style={{ flex: 1 }} />,
      }}
    />
  </Stack.Navigator>
);
export default BrowseStack;
