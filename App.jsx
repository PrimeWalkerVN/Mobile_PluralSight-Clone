import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider, IconRegistry, Layout } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import MainStack from './src/components/Main/Stacks/MainStack';
import MySnackBar from './src/components/Others/MySnackBar';
import { DownloadProvider } from './src/context/DonwloadContext';
import { SnackBarProvider } from './src/context/SnackBarContext';
import { ThemeLangContext, ThemeLangProvider } from './src/context/ThemeLangContext';
import { UserProvider } from './src/context/UserContext';
import './src/i18n/i18n';

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <SnackBarProvider>
        <ThemeLangProvider>
          <ThemeLangContext.Consumer>
            {(context) => (
              <ApplicationProvider {...eva} theme={context.theme.get === 'dark' ? eva.dark : eva.light}>
                <Layout style={{ flex: 1 }}>
                  <UserProvider>
                    <DownloadProvider>
                      <SafeAreaView style={{ flex: 1 }}>
                        <NavigationContainer>
                          <MainStack />
                        </NavigationContainer>
                        <MySnackBar />
                      </SafeAreaView>
                    </DownloadProvider>
                  </UserProvider>
                </Layout>
              </ApplicationProvider>
            )}
          </ThemeLangContext.Consumer>
        </ThemeLangProvider>
      </SnackBarProvider>
      <StatusBar style="auto" />
    </>
  );
};
export default App;
