import { Button, Icon, Input, Layout, Text } from '@ui-kitten/components';
import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const AlertIcon = (props) => <Icon {...props} name="alert-circle-outline" />;
export default function VerifyPassword() {
  const [value, setValue] = useState({ token: '', password: '' });
  const size = 'large';
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

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
      <Text status="info" category="h4" style={styles.header}>
        VERIFY PASSWORD
      </Text>
      <Text status="basic" category="h6" style={styles.header}>
        Enter your token
      </Text>
      <Input
        style={styles.input}
        value={value.password}
        label="New Password"
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

      <Button style={styles.loginButton}>Change password</Button>
      <Button appearance="outline" style={styles.loginButton}>
        CANCEL
      </Button>
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
