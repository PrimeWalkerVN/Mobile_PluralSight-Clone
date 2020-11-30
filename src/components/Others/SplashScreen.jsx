import { Layout, Text } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import navNames from '../../constants/navNames';

const SplashScreen = (props) => {
  const { navigation } = props;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress >= 100) {
      clearInterval(interval);
      navigation.reset({
        index: 0,
        routes: [{ name: navNames.auth }],
      });
    }
    const interval = setInterval(() => {
      return setProgress(progress + 1);
    }, 10);
    return () => clearInterval(interval);
  }, [progress]);

  return (
    <Layout style={{ flex: 1 }}>
      <View style={styles.progress}>
        <Text category="h6"> {progress}%</Text>
        <Progress.Bar style={styles.progressBar} progress={progress / 100} width={200} />
      </View>
    </Layout>
  );
};
const styles = StyleSheet.create({
  progress: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBar: {
    marginVertical: 5,
  },
});
export default SplashScreen;
