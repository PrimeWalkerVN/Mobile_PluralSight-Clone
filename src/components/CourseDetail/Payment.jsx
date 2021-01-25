import { Layout } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

const Payment = (props) => {
  const { route } = props;
  const { url } = route.params;
  return <Layout style={styles.container}>{url && <WebView source={{ uri: url || null }} />}</Layout>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Payment;
