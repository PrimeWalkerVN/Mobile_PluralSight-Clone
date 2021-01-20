import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import FlatListCourse from '../../../Courses/FlatListCourse';

const BrowseDetail = (props) => {
  const { image, title, data } = props.route.params;
  const { navigation } = props;

  return (
    <Layout style={{ flex: 1 }}>
      <ImageBackground style={styles.image} source={image}>
        <Text style={styles.textImage} numberOfLines={2} category="h2">
          {title}
        </Text>
      </ImageBackground>
      <FlatListCourse items={data || []} navigation={navigation} />
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
