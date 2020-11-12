import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import SectionCourse from './SectionCourse';

const Home = (props) => {
  const { navigation } = props;
  return (
    <Layout style={styles.container}>
      <ScrollView>
        <View>
          <ImageBackground
            style={styles.header}
            source={require('../../../../assets/courses/pngTree.png')}
            imageStyle={styles.imageHeader}
          >
            <Text category="h5" style={styles.text}>
              Welcome to PluralSight!
            </Text>
            <Text category="s1">
              With PluralSight, you can build and apply skills in top technologies. You have free access to Skill IQ,
              Role IQ, a limited library of courses and a weekly rotation of new courses.
            </Text>
          </ImageBackground>
        </View>

        <SectionCourse title="Software Development" navigation={navigation} />
        <SectionCourse title="IT Operations" navigation={navigation} />
        <SectionCourse title="Data Professional" navigation={navigation} />
        <SectionCourse title="Security Professional" navigation={navigation} />
      </ScrollView>
    </Layout>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 200,
    flex: 1,
    justifyContent: 'flex-end',
    margin: 5,
    padding: 10,
  },
  imageHeader: {
    height: 100,
    backgroundColor: 'black',
    resizeMode: 'contain',
    opacity: 1,
    marginRight: -250,
  },
  text: {
    marginBottom: 20,
  },
});
