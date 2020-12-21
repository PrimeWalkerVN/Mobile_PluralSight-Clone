import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Layout, Tab, TabBar } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ResultAll from './ResultAll';
import ResultAuthors from './ResultAuthors';
import ResultCourses from './ResultCourses';
import ResultPaths from './ResultPaths';
import SearchBar from './SearchBar';

export default function Search() {
  const TabNavigation = createMaterialTopTabNavigator();
  const TopTabBar = ({ navigation, state }) => (
    <TabBar
      selectedIndex={state.index}
      onSelect={(index) => {
        navigation.navigate(state.routeNames[index]);
      }}
    >
      <Tab title="ALL" />
      <Tab title="COURSES" />
      <Tab title="PATHS" />
      <Tab title="AUTHORS" />
    </TabBar>
  );
  return (
    <Layout level="2" style={styles.container}>
      <SearchBar />
      <View style={{ flex: 1 }}>
        <TabNavigation.Navigator tabBar={(props) => <TopTabBar {...props} />}>
          <TabNavigation.Screen name="All" component={ResultAll} />
          <TabNavigation.Screen name="Courses" component={ResultCourses} />
          <TabNavigation.Screen name="Paths" component={ResultPaths} />
          <TabNavigation.Screen name="Authors" component={ResultAuthors} />
        </TabNavigation.Navigator>
      </View>
    </Layout>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
