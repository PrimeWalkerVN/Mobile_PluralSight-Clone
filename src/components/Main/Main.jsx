import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';
import navNames from '../../constants/navNames';
import BrowseStack from './Stacks/BrowseStack';
import DownloadStack from './Stacks/DownloadStack';
import HomeStack from './Stacks/HomeStack';
import SearchStack from './Stacks/SearchStack';

const HomeIcon = (props) => <Icon {...props} name="home-outline" />;
const SearchIcon = (props) => <Icon {...props} name="search-outline" />;
const DownloadIcon = (props) => <Icon {...props} name="cloud-download-outline" />;
const BrowseIcon = (props) => <Icon {...props} name="browser-outline" />;

const Tab = createBottomTabNavigator();

const Main = () => {
  const TabScreen = {
    Home: HomeStack,
    Browse: BrowseStack,
    Download: DownloadStack,
    Search: SearchStack,
  };
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
        {Object.entries({
          ...TabScreen,
        }).map(([name, component]) => (
          <Tab.Screen key={name} name={name} component={component} />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const BottomTabBar = (props) => {
  const { navigation, state } = props;
  return (
    <BottomNavigation
      style={styles.bottomNavigation}
      selectedIndex={state.index}
      appearance="noIndicator"
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
    >
      <BottomNavigationTab title={navNames.home} icon={HomeIcon} />
      <BottomNavigationTab title={navNames.browse} icon={BrowseIcon} />
      <BottomNavigationTab title={navNames.download} icon={DownloadIcon} />
      <BottomNavigationTab title={navNames.search} icon={SearchIcon} />
    </BottomNavigation>
  );
};
const styles = StyleSheet.create({
  bottomNavigation: {
    paddingTop: 10,
  },
});
export default Main;
