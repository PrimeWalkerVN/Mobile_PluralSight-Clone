import { Layout, Text } from '@ui-kitten/components';
import React, { useEffect } from 'react';
import { Image, LogBox, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import ContentDropdown from '../Common/ContentDropdown';
import FlatListCourse from '../Courses/FlatListCourse';

const PathDetail = (props) => {
  const { navigation } = props;
  const { path } = props.route.params;
  const courses = [
    {
      id: 1,
      title: 'Angular',
      author: 'Chi Thanh',
      level: 'Advance',
      released: 'May 6, 2020',
      duration: '3 h',
    },
    {
      id: 2,
      title: 'React native',
      author: 'Chi Thanh',
      level: 'Advance',
      released: 'May 6, 2020',
      duration: '3 h',
    },
    {
      id: 3,
      title: 'Android',
      author: 'Chi Thanh',
      level: 'Advance',
      released: 'May 6, 2020',
      duration: '3 h',
    },
  ];

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  return (
    <Layout style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image source={require('../../../assets/courses/angular.jpg')} style={styles.image} />
            <View style={styles.headerInfo}>
              <Text category="h5" numberOfLines={2} ellipsizeMode="tail">
                {path.title}
              </Text>
              <Text category="p2"> {path.coursesNumber} Courses - 3 hours</Text>
            </View>
          </View>
          <ContentDropdown height={150}>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quas natus, officiis qui voluptatibus nostrum
              fuga, voluptatem recusandae nihil suscipit labore magni non culpa consequuntur alias voluptates nisi,
              iusto iure?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque quam voluptatibus deserunt,
              impedit sit optio omnis possimus exercitationem praesentium voluptas iure modi nemo consequuntur. Ad
              praesentium dolorem sunt iure tempore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              consequuntur voluptatum optio minus consequatur veritatis repellendus, voluptatem similique laboriosam ex
              accusantium quaerat architecto earum rem voluptatibus vitae iure qui veniam!
            </Text>
          </ContentDropdown>

          <View style={styles.progress}>
            <Text category="h6">Your Progress 50%</Text>
            <Progress.Bar style={styles.progressBar} progress={0.5} width={200} />
          </View>

          <Text style={styles.title}>Courses</Text>
          <FlatListCourse items={courses} navigation={navigation} />
        </View>
      </ScrollView>
    </Layout>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 10,
  },
  headerInfo: {
    paddingLeft: 20,
  },
  image: {
    width: 130,
    height: 100,
    resizeMode: 'cover',
  },
  progress: {
    flex: 1,
    alignItems: 'center',
  },
  progressBar: {
    marginVertical: 5,
  },
  title: {
    marginVertical: 20,
  },
  titlePath: {
    overflow: 'hidden',
  },
});
export default PathDetail;
