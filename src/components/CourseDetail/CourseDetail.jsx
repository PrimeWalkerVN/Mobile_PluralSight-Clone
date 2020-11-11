import { Tab, TabBar, Text } from '@ui-kitten/components';
import React, { useCallback, useRef, useState } from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import ButtonLeftIcon from '../Common/ButtonLeftIcon';
import ButtonTitleIcon from '../Common/ButtonTitleIcon';
import ContentDropdown from '../Common/ContentDropdown';
import Contents from './Contents/Contents';
import CoursesInfoRow from './CourseInfoRow';

const CourseDetail = () => {
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const course = {
    id: 2,
    title: 'React native',
    author: 'Chi Thanh',
    level: 'Advance',
    released: 'May 6, 2020',
    duration: '3 h',
  };

  return (
    <View style={styles.layout}>
      <YoutubePlayer ref={playerRef} height={250} play={playing} videoId="iee2TATGMyI" onChangeState={onStateChange} />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.body}>
            <Text category="h3">Angular fundamentals</Text>
            <CoursesInfoRow item={course} />
            <View style={styles.buttonsGroup}>
              <ButtonTitleIcon title="Bookmark" nameIcon="bookmark-outline" />
              <ButtonTitleIcon title="Add to channel" nameIcon="radio-outline" />
              <ButtonTitleIcon title="Download" nameIcon="download-outline" />
            </View>
            <ContentDropdown>
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
        <View>
          <TabBar selectedIndex={selectedIndex} onSelect={(index) => setSelectedIndex(index)}>
            <Tab title="CONTENTS" />
            <Tab title="TRANSCRIPT" />
          </TabBar>
        </View>
        <Contents />
      </ScrollView>
    </View>
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
