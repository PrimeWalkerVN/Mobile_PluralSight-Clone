import { Button, Layout, Text } from '@ui-kitten/components';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Snackbar } from 'react-native-paper';
import usersApi from '../../api/usersApi';
import navNames from '../../constants/navNames';
import Loading from '../Others/Loading';

export default function ActiveEmail(props) {
  const { navigation } = props;
  const { email } = props.route.params;
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [errRes, setErrRes] = useState('');

  const sendActiveEmail = async () => {
    setLoading(true);
    try {
      await usersApi.sendActiveEmail({ email });
      setVisible(true);
      setErrRes(`Send success!Check your email!`);
    } catch (err) {
      setVisible(true);
      setErrRes(`${err.response.status} - ${err.response.data.message}`);
    }
    setLoading(false);
  };
  return (
    <Layout style={styles.container}>
      <Text status="info" category="h4" style={styles.header}>
        ACTIVE EMAIL
      </Text>
      <Text status="basic" category="h6" style={styles.header}>
        Check your email to active account!
      </Text>

      <Button style={styles.loginButton} onPress={() => navigation.navigate(navNames.login)}>
        Continue
      </Button>
      <Text category="s1" status="info" style={styles.link} onPress={sendActiveEmail}>
        If you don't have any email, send again?
      </Text>
      <Snackbar style={styles.snackbar} visible={visible} onDismiss={() => setVisible(false)}>
        {errRes}
      </Snackbar>
      {loading && <Loading />}
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    marginBottom: 40,
  },
  loginButton: {
    marginTop: 20,
    borderRadius: 10,
  },
  link: {
    marginTop: 20,
    textAlign: 'center',
  },
  input: {
    marginTop: 10,
  },
  snackbar: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
