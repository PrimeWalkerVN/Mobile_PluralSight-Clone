import { Button, Layout, Text } from '@ui-kitten/components';
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { DownLoadContext } from '../../../context/DonwloadContext';
import FlatListCourse from './FlatListCourse';

export default function Download(props) {
  const { navigation } = props;
  const downContext = useContext(DownLoadContext);
  const courses = downContext.courses.get;

  const removeAllHandler = () => {
    downContext.courses.removeAll();
  };

  return (
    <Layout level="2" style={styles.container}>
      <View style={styles.header}>
        <Text category="h6">{courses.length} courses</Text>
        <Button onPress={removeAllHandler} appearance="ghost" size="large">
          REMOVE ALL
        </Button>
      </View>
      <FlatListCourse items={courses} navigation={navigation} removeItem={downContext.courses.removeCourse} />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginHorizontal: 5,
    marginVertical: 30,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
