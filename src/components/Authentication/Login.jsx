import { Button, Icon, Input, Layout, Text } from '@ui-kitten/components';
import React, { useContext, useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import * as Google from 'expo-google-app-auth';
import usersApi from '../../api/usersApi';
import navNames from '../../constants/navNames';
import { SnackBarContext } from '../../context/SnackBarContext';
import { UserContext } from '../../context/UserContext';
import expoGoogleLoginConfig from '../../config/expoGoogleLoginConfig';

const AlertIcon = (props) => <Icon {...props} name="alert-circle-outline" />;
const GoogleIcon = (props) => <Icon {...props} name="google" />;

export default function Login(props) {
  const context = useContext(UserContext);
  const [username, setUsername] = useState('primewalkervn@gmail.com');
  const [password, setPassword] = useState('Thanh123');
  const [usernameErr] = useState('');
  const [pswErr] = useState('');
  const [responseErr, setResponseErr] = useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const { navigation } = props;
  const size = 'large';
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const snContext = useContext(SnackBarContext);
  const setLoading = (data) => snContext.loading.set(data);

  const loginHandler = async () => {
    if (username === '' || password === '') return;
    setLoading(true);
    try {
      const res = await usersApi.login({ email: username.toLowerCase(), password });
      context.user.set(res.userInfo);
      context.user.setToken(res.token);
    } catch (err) {
      if (err.response.status === 404) {
        setResponseErr('Something went wrong!');
      } else {
        setResponseErr(err.response.data.message);
      }
    }

    setLoading(false);
  };
  const googleLogin = async () => {
    setLoading(true);
    const { type, user } = await Google.logInAsync(expoGoogleLoginConfig);
    if (type === 'success') {
      // Then you can use the Google REST API
      try {
        const params = {
          user: {
            email: user.email,
            id: user.id,
          },
        };
        const res = await usersApi.loginWithGoogle(params);
        context.user.setToken(res.token);
        const getMeRes = await usersApi.getMe();
        context.user.set(getMeRes.payload);
      } catch (err) {
        if (err.response.status === 404) {
          setResponseErr('Something went wrong!');
        } else {
          setResponseErr(`${err.response.status}-${err.response.data.message}`);
        }
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };
  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );
  return (
    <Layout level="2" style={styles.container}>
      <Text status="info" category="h1" style={styles.header}>
        LOGIN
      </Text>
      <Input
        status={usernameErr.length > 0 ? 'danger' : 'primary'}
        captionIcon={usernameErr.length > 0 ? AlertIcon : null}
        caption={usernameErr.length > 0 ? usernameErr : ''}
        label="Email"
        autoCapitalize="none"
        defaultValue="primewalkervn@gmail.com"
        onChangeText={(nextValue) => setUsername(nextValue.toLowerCase())}
        size={size}
      />
      <Input
        label="Password"
        placeholder=""
        caption={pswErr.length > 0 ? pswErr : 'Should contain at least 6 symbols'}
        accessoryRight={renderIcon}
        captionIcon={AlertIcon}
        status={pswErr.length > 0 ? 'danger' : 'primary'}
        size={size}
        secureTextEntry={secureTextEntry}
        defaultValue="Thanh123"
        onChangeText={(nextValue) => setPassword(nextValue)}
      />
      {responseErr.length > 0 && (
        <Text style={styles.textError} status="danger">
          {responseErr}
        </Text>
      )}
      <Button style={styles.loginButton} onPress={loginHandler}>
        SIGN IN
      </Button>
      <Button style={styles.loginButton} status="danger" onPress={googleLogin} accessoryRight={GoogleIcon}>
        SIGN IN WITH GOOGLE
      </Button>
      <Text status="info" style={styles.link} onPress={() => navigation.navigate(navNames.forgetPassword)}>
        FORGOT PASSWORD?
      </Text>
      <Text status="info" style={styles.link} onPress={() => navigation.navigate(navNames.register)}>
        SIGN UP FREE?
      </Text>
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
    alignSelf: 'center',
    borderRadius: 10,
    width: '80%',
  },
  link: {
    marginTop: 20,
    textAlign: 'center',
  },
  textError: {
    margin: 10,
    textAlign: 'center',
  },
});
