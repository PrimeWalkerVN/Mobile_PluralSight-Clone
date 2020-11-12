import { Button, Icon, Input, Layout, Text } from '@ui-kitten/components';
import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const AlertIcon = (props) => <Icon {...props} name="alert-circle-outline" />;

export default function Login() {
  const [value, setValue] = useState({ username: '', password: '' });
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
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
        LOGIN
      </Text>
      <Input
        placeholder=""
        value={value.username}
        onChangeText={(nextValue) => setValue(nextValue)}
        label="User name( or Email)"
        size={size}
      />
      <Input
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
      <Button style={styles.loginButton}>SIGN IN</Button>
      <Text status="info" style={styles.link}>
        FORGOT PASSWORD?
      </Text>
      <Text status="info" style={styles.link}>
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
