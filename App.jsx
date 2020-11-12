import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';

import Main from './src/components/Main/Main';

const App = () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.dark}>
      <Layout style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <Main />
        </SafeAreaView>
      </Layout>
    </ApplicationProvider>
    <StatusBar style="auto" />
  </>
);
export default App;
