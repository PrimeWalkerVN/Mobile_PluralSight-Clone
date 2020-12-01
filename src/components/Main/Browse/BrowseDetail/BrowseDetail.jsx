import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import FlatListCourse from '../../../Courses/FlatListCourse';

const BrowseDetail = (props) => {
  const { image, title } = props.route.params;
  const { navigation } = props;

  const courses = [
    {
      id: 1,
      title: 'Android',
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
    {
      id: 4,
      title: 'Android',
      author: 'Chi Thanh',
      level: 'Advance',
      released: 'May 6, 2020',
      duration: '3 h',
    },
    {
      id: 5,
      title: 'Android',
      author: 'Chi Thanh',
      level: 'Advance',
      released: 'May 6, 2020',
      duration: '3 h',
    },
  ];
  return (
    <Layout style={{ flex: 1 }}>
      <ImageBackground style={styles.image} source={image}>
        <Text style={styles.textImage} numberOfLines={2} category="h2">
          {title}
        </Text>
      </ImageBackground>
      <FlatListCourse items={courses} navigation={navigation} />
    </Layout>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 150,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  textImage: {
    textAlign: 'center',
  },
});
export default BrowseDetail;
