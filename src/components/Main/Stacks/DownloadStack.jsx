import { createStackNavigator } from '@react-navigation/stack';
import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import CourseDetail from '../../CourseDetail/CourseDetail';
import Download from '../Download/Download';
import HeaderTopTab from './HeaderTopTab';
// Download screen
const DownloadScreen = {
  Detail: CourseDetail,
};
const Stack = createStackNavigator();
const DownloadStack = () => (
  <Stack.Navigator initialRouteName="Download" mode="modal">
    {Object.entries({
      ...DownloadScreen,
    }).map(([name, component]) => (
      <Stack.Screen key={name} name={name} component={component} options={HeaderTopTab} />
    ))}
    <Stack.Screen
      name="Download"
      component={Download}
      options={{
        title: <Text category="h5">Download</Text>,
        headerBackground: () => <Layout style={{ flex: 1 }} />,
      }}
    />
  </Stack.Navigator>
);
export default DownloadStack;
