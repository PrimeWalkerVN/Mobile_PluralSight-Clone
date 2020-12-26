import AsyncStorage from '@react-native-async-storage/async-storage';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Layout, Tab, TabBar } from '@ui-kitten/components';
import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import coursesApi from '../../../api/coursesApi';
import { SnackBarContext } from '../../../context/SnackBarContext';
import ResultAll from './ResultAll';
import ResultAuthors from './ResultAuthors';
import ResultCourses from './ResultCourses';
import SearchBar from './SearchBar';

export default function Search(props) {
  const { navigation } = props;
  const TabNavigation = createMaterialTopTabNavigator();
  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const snContext = useContext(SnackBarContext);

  const searchHandler = async (value) => {
    if (value === searchTerm) return;

    setSearchTerm(value);

    snContext.loading.set(true);
    const token = await AsyncStorage.getItem('access_token');
    try {
      const params = {
        token,
        keyword: value,
        limit: 20,
        offset: 0,
      };
      const res = await coursesApi.searchAll(params);
      setSearchResult(res.payload);
    } catch (err) {
      snContext.snackbar.set(true);
      snContext.snackbar.setData(`${err.response.status} - ${err.response.data.message}`);
    } finally {
      snContext.loading.set(false);
    }
  };

  const TopTabBar = ({ navigation, state }) => (
    <TabBar
      selectedIndex={state.index}
      onSelect={(index) => {
        navigation.navigate(state.routeNames[index]);
      }}
    >
      <Tab title="ALL" />
      <Tab title="COURSES" />
      <Tab title="AUTHORS" />
    </TabBar>
  );
  return (
    <Layout level="2" style={styles.container}>
      <SearchBar searchHandler={searchHandler} />
      <View style={{ flex: 1 }}>
        <TabNavigation.Navigator tabBar={(props) => <TopTabBar {...props} />}>
          <TabNavigation.Screen name="All" children={() => <ResultAll data={searchResult} navigation={navigation} />} />
          <TabNavigation.Screen
            name="Courses"
            children={() => <ResultCourses data={searchResult.courses} navigation={navigation} />}
          />
          <TabNavigation.Screen
            name="Authors"
            children={() => <ResultAuthors data={searchResult.instructors} navigation={navigation} />}
          />
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
