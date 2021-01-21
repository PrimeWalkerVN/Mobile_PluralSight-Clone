import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
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
    <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
      {Object.entries({
        ...TabScreen,
      }).map(([name, component]) => (
        <Tab.Screen key={name} name={name} component={component} />
      ))}
    </Tab.Navigator>
  );
};

const BottomTabBar = (props) => {
  const { navigation, state } = props;
  const { t } = useTranslation();
  return (
    <BottomNavigation
      style={styles.bottomNavigation}
      selectedIndex={state.index}
      appearance="noIndicator"
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
    >
      <BottomNavigationTab title={t('home')} icon={HomeIcon} />
      <BottomNavigationTab title={t('browse')} icon={BrowseIcon} />
      <BottomNavigationTab title={t('download')} icon={DownloadIcon} />
      <BottomNavigationTab title={t('search')} icon={SearchIcon} />
    </BottomNavigation>
  );
};
const styles = StyleSheet.create({
  bottomNavigation: {
    paddingTop: 10,
  },
});
export default Main;
