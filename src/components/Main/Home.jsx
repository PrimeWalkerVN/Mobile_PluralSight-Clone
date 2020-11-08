import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import React from 'react';
import { StyleSheet } from 'react-native';
import VerifyPassword from '../Authentication/VerifyPassword';

const Home = () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.dark}>
      <Layout style={styles.container}>
        <VerifyPassword />
      </Layout>
    </ApplicationProvider>
  </>
);
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
