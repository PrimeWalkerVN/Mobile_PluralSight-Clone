import { Button, Input, Layout, Text } from '@ui-kitten/components';
import React, { useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import usersApi from '../../api/usersApi';
import { SnackBarContext } from '../../context/SnackBarContext';

export default function ForgetPassword(props) {
  const [value, setValue] = useState('');
  const { navigation } = props;
  const [success, setSuccess] = useState('');
  const size = 'large';

  const snContext = useContext(SnackBarContext);
  const setLoading = (data) => snContext.loading.set(data);
  const submitHandler = async () => {
    if (!value) return;
    setLoading(true);
    try {
      const res = await usersApi.forgotPassword({
        email: value.toLowerCase(),
      });
      setSuccess(res.message);
    } catch (err) {
      snContext.snackbar.set(true);
      snContext.snackbar.setData(`${err.response.status} - ${err.response.data.message}`);
    }
    setLoading(false);
  };

  return (
    <Layout style={styles.container} level="2">
      <Text status="info" category="h4" style={styles.header}>
        FORGOT PASSWORD
      </Text>
      <Text status="basic" category="h6" style={styles.header}>
        Enter your email address and we will send you a link to reset your password
      </Text>
      <Input
        placeholder=""
        style={styles.input}
        value={value.username}
        onChangeText={(nextValue) => setValue(nextValue)}
        label="Email"
        size={size}
      />
      {success !== '' && (
        <Text category="s1" status="success" style={styles.success}>
          {success}
        </Text>
      )}
      <Button style={styles.loginButton} onPress={submitHandler}>
        Send email
      </Button>
      <Button appearance="outline" style={styles.loginButton} onPress={() => navigation.goBack()}>
        CANCEL
      </Button>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
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
  },
  success: {
    textAlign: 'center',
    padding: 10,
  },
});
