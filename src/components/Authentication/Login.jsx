import { Button, Icon, Input, Layout, Text } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import navNames from '../../constants/navNames';

const AlertIcon = (props) => <Icon {...props} name="alert-circle-outline" />;

export default function Login(props) {
  const account = { username: 'Prime', password: '123456' };

  const [username, setUsername] = useState(account.username);
  const [password, setPassword] = useState(account.password);
  const [usernameErr, setUserNameErr] = useState('');
  const [pswErr, setPswErr] = useState('');

  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const { navigation } = props;
  const size = 'large';
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  useEffect(() => {
    if (username !== account.username && username !== '') setUserNameErr('User name not exits');
    else if (password !== account.password && password !== '') setPswErr('Password is wrong, try again!');
    else {
      setUserNameErr('');
      setPswErr('');
    }
  }, [username, password]);

  const loginHandler = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: navNames.mainTab }],
    });
  };
  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );
  return (
    <Layout style={styles.container}>
      <Text status="info" category="h1" style={styles.header}>
        LOGIN
      </Text>
      <Input
        status={usernameErr.length > 0 ? 'danger' : 'primary'}
        captionIcon={usernameErr.length > 0 ? AlertIcon : null}
        caption={usernameErr.length > 0 ? usernameErr : ''}
        label="User name( or Email)"
        onChangeText={(nextValue) => setUsername(nextValue)}
        size={size}
        defaultValue={account.username}
      />
      <Input
        label="Password"
        placeholder=""
        caption={pswErr.length > 0 ? pswErr : 'Should contain at least 8 symbols'}
        accessoryRight={renderIcon}
        captionIcon={AlertIcon}
        status={pswErr.length > 0 ? 'danger' : 'primary'}
        size={size}
        defaultValue={account.password}
        secureTextEntry={secureTextEntry}
        onChangeText={(nextValue) => setPassword(nextValue)}
      />
      <Button style={styles.loginButton} onPress={loginHandler}>
        SIGN IN
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
    borderRadius: 10,
  },
  link: {
    marginTop: 20,
    textAlign: 'center',
  },
});
