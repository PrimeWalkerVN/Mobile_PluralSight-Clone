import { Button, Icon, Input, Layout, Text } from '@ui-kitten/components';
import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';

const AlertIcon = (props) => <Icon {...props} name="alert-circle-outline" />;

export default function Register(props) {
  const [value, setValue] = useState({ username: '', password: '' });
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const { navigation } = props;
  const size = 'large';

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );
  return (
    <Layout style={styles.container}>
      <Text status="info" category="h1" style={styles.header}>
        REGISTER
      </Text>
      <Input
        placeholder=""
        value={value.username}
        style={styles.input}
        onChangeText={(nextValue) => setValue(nextValue)}
        label="User name"
        size={size}
      />
      <Input
        placeholder=""
        style={styles.input}
        value={value.username}
        onChangeText={(nextValue) => setValue(nextValue)}
        label="Email"
        size={size}
      />
      <Input
        style={styles.input}
        value={value.password}
        label="Password"
        placeholder=""
        caption="Should contain at least 8 symbols"
        accessoryRight={renderIcon}
        captionIcon={AlertIcon}
        size={size}
        secureTextEntry={secureTextEntry}
        onChangeText={(nextValue) => setValue(nextValue)}
      />
      <Input
        style={styles.input}
        value={value.password}
        label="Confirm Password"
        placeholder=""
        accessoryRight={renderIcon}
        size={size}
        secureTextEntry={secureTextEntry}
        onChangeText={(nextValue) => setValue(nextValue)}
      />
      <Button onPress={() => navigation.goBack()} style={styles.loginButton}>
        SIGN UP
      </Button>

      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <Text status="info" style={styles.link}>
          HAVE ACCOUNT? LOGIN
        </Text>
      </TouchableWithoutFeedback>
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
});
