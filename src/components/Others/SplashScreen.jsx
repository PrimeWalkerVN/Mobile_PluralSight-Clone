import AsyncStorage from '@react-native-async-storage/async-storage';
import { Layout, Text } from '@ui-kitten/components';
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Progress from 'react-native-progress';
import usersApi from '../../api/usersApi';
import { SnackBarContext } from '../../context/SnackBarContext';
import { UserContext } from '../../context/UserContext';

const SplashScreen = () => {
  const [progress, setProgress] = useState(0);
  const context = useContext(UserContext);
  const snContext = useContext(SnackBarContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => prev + 1);
    }, 10);

    if (progress >= 100) {
      clearInterval(interval);
      context.loading.set(false);
    }
    return () => clearInterval(interval);
  });
  useEffect(() => {
    getMe();
  }, []);

  const getMe = async () => {
    const token = await AsyncStorage.getItem('access_token');
    if (token) {
      try {
        const res = await usersApi.getMe();
        if (res.payload) context.user.set(res.payload);
      } catch (err) {
        if (err.response) {
          snContext.snackbar.set(true);
          snContext.snackbar.setData(`${err.response.status} - ${err.response.data.message}`);
        }
      }
    }
  };
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
