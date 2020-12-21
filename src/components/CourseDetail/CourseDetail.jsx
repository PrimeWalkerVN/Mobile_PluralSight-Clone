import { Layout, Tab, TabBar, Text } from '@ui-kitten/components';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Alert, ScrollView, StyleSheet, View, LogBox } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import YoutubePlayer from 'react-native-youtube-iframe';
import ButtonLeftIcon from '../Common/ButtonLeftIcon';
import ButtonTitleIcon from '../Common/ButtonTitleIcon';
import ContentDropdown from '../Common/ContentDropdown';
import Contents from './Contents/Contents';
import Transcript from './Transcript/Transcript';
import CoursesInfoRow from './CourseInfoRow';

const CourseDetail = (props) => {
  const { course } = props.route.params;
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef();

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);
  const TabNavigation = createMaterialTopTabNavigator();
  const TopTabBar = ({ navigation, state }) => (
    <TabBar
      selectedIndex={state.index}
      onSelect={(index) => {
        navigation.navigate(state.routeNames[index]);
      }}
    >
      <Tab title="CONTENTS" />
      <Tab title="TRANSCRIPT" />
    </TabBar>
  );
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  return (
    <Layout level="2" style={styles.layout}>
      <YoutubePlayer ref={playerRef} height={250} play={playing} videoId="iee2TATGMyI" onChangeState={onStateChange} />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.body}>
            <Text category="h3">{course.title}</Text>
            <CoursesInfoRow item={course} />
            <View style={styles.buttonsGroup}>
              <ButtonTitleIcon title="Bookmark" nameIcon="bookmark-outline" />
              <ButtonTitleIcon title="Add to channel" nameIcon="radio-outline" />
              <ButtonTitleIcon title="Download" nameIcon="download-outline" />
            </View>
            <ContentDropdown height={50}>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quas natus, officiis qui voluptatibus
                nostrum fuga, voluptatem recusandae nihil suscipit labore magni non culpa consequuntur alias voluptates
                nisi, iusto iure?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque quam voluptatibus
                deserunt, impedit sit optio omnis possimus exercitationem praesentium voluptas iure modi nemo
                consequuntur. Ad praesentium dolorem sunt iure tempore?
              </Text>
            </ContentDropdown>
            <ButtonLeftIcon appearance="outline" status="control" nameIcon="checkmark-circle-outline">
              Take a learning check
            </ButtonLeftIcon>
            <ButtonLeftIcon appearance="outline" status="control" nameIcon="pantone-outline">
              View related paths & courses
            </ButtonLeftIcon>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <TabNavigation.Navigator tabBar={(props) => <TopTabBar {...props} />} initialRouteName="Contents">
            <TabNavigation.Screen name="Contents" component={Contents} />
            <TabNavigation.Screen name="Transcript" component={Transcript} />
          </TabNavigation.Navigator>
        </View>
      </ScrollView>
    </Layout>
  );
};
const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  container: {
    flex: 1,
    margin: 10,
  },
  body: {
    flex: 1,
  },
  buttonsGroup: {
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default CourseDetail;
