import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider, IconRegistry, Layout } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Appearance, SafeAreaView } from 'react-native';
import MainStack from './src/components/Main/Stacks/MainStack';
import MySnackBar from './src/components/Others/MySnackBar';
import { SnackBarProvider } from './src/context/SnackBarContext';
import { UserProvider } from './src/context/UserContext';

const App = () => {
  const colorScheme = Appearance.getColorScheme();
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={colorScheme === 'dark' ? eva.dark : eva.light}>
        <Layout style={{ flex: 1 }}>
          <SnackBarProvider>
            <SafeAreaView style={{ flex: 1 }}>
              <UserProvider>
                <NavigationContainer>
                  <MainStack />
                </NavigationContainer>
              </UserProvider>
              <MySnackBar />
            </SafeAreaView>
          </SnackBarProvider>
        </Layout>
      </ApplicationProvider>
      <StatusBar style="auto" />
    </>
  );
};
export default App;
