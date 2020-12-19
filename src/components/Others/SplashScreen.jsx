import { Layout, Text } from '@ui-kitten/components';
import React, { useContext, useEffect, useState } from 'react';
import { AsyncStorage, StyleSheet, View } from 'react-native';
import * as Progress from 'react-native-progress';
import usersApi from '../../api/usersApi';
import { SnackBarContext } from '../../context/SnackBarContext';
import { UserContext } from '../../context/UserContext';

const SplashScreen = () => {
  const [progress, setProgress] = useState(0);
  const context = useContext(UserContext);
  const snContext = useContext(SnackBarContext);

  useEffect(() => {
    if (progress >= 100) {
      clearInterval(interval);
      context.loading.set(false);
    }
    const interval = setInterval(() => {
      return setProgress(progress + 1);
    }, 10);
    return () => clearInterval(interval);
  }, [progress]);

  useEffect(() => {
    const token = AsyncStorage.getItem('access_token');
    if (token) {
      const getMe = async () => {
        try {
          await usersApi.getMe();
          // context.user.set(res.payload);
        } catch (err) {
          snContext.snackbar.set(true);
          snContext.snackbar.setData(`${err.response.status} - ${err.response.data.message}`);
        }
      };
      getMe();
    }
  }, []);

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
