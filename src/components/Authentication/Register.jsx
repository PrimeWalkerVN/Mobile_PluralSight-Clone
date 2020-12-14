import { Button, Icon, Input, Layout, Text } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Snackbar } from 'react-native-paper';
import usersApi from '../../api/usersApi';
import navNames from '../../constants/navNames';
import Loading from '../Others/Loading';

const AlertIcon = (props) => <Icon {...props} name="alert-circle-outline" />;

export default function Register(props) {
  const [value, setValue] = useState({ username: '', password: '', email: '', phone: '' });
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [pswErr, setPswErr] = useState('');
  const [visible, setVisible] = useState(false);
  const [errRes, setErrRes] = useState('');
  const [loading, setLoading] = useState(false);
  const { navigation } = props;
  const [confirmPsw, setConfirmPsw] = useState('');

  const size = 'large';

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );
  useEffect(() => {
    if (value.password.length < 6) setPswErr('Should contain at least 6 symbols');
    if (confirmPsw !== value.password) setPswErr('Confirm password was not match!');
    else setPswErr('');
  }, [confirmPsw, value]);

  const signUpHandler = async () => {
    // navigation.goBack();
    if (value.username === '' || value.email === '') return;
    if (pswErr !== '') return;
    setLoading(true);
    try {
      await usersApi.register({
        username: value.username.toLowerCase(),
        email: value.email.toLowerCase(),
        password: value.password,
        phone: value.phone,
      });
      navigation.navigate(navNames.activeEmail, { email: value.email });
    } catch (err) {
      setVisible(true);
      setErrRes(`${err.response.status} - ${err.response.data.message}`);
    }
    setLoading(false);
  };
  return (
    <Layout>
      <ScrollView>
        <Layout style={styles.container}>
          <Text status="info" category="h1" style={styles.header}>
            REGISTER
          </Text>
          <Input
            placeholder=""
            style={styles.input}
            onChangeText={(nextValue) => setValue({ ...value, username: nextValue })}
            label="Username"
            size={size}
          />
          <Input
            placeholder=""
            style={styles.input}
            onChangeText={(nextValue) => setValue({ ...value, email: nextValue })}
            label="Email"
            size={size}
          />
          <Input
            placeholder=""
            style={styles.input}
            onChangeText={(nextValue) => setValue({ ...value, phone: nextValue })}
            label="Phone"
            size={size}
          />
          <Input
            label="Password"
            placeholder=""
            key="psw"
            style={styles.input}
            selectTextOnFocus
            caption={pswErr.length > 0 ? pswErr : 'Should contain at least 8 symbols'}
            accessoryRight={renderIcon}
            captionIcon={AlertIcon}
            status={pswErr.length > 0 ? 'danger' : 'primary'}
            size={size}
            onChangeText={(nextValue) => setValue({ ...value, password: nextValue })}
          />
          <Input
            style={styles.input}
            label="Confirm Password"
            placeholder=""
            accessoryRight={renderIcon}
            size={size}
            onChangeText={(nextValue) => setConfirmPsw(nextValue)}
          />
          <Button onPress={signUpHandler} style={styles.loginButton}>
            SIGN UP
          </Button>

          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <Text status="info" style={styles.link}>
              HAVE ACCOUNT? LOGIN
            </Text>
          </TouchableWithoutFeedback>

          {loading && <Loading />}
        </Layout>
      </ScrollView>
      <Snackbar style={styles.snackbar} visible={visible} onDismiss={() => setVisible(false)}>
        {errRes}
      </Snackbar>
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
    marginBottom: 30,
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
