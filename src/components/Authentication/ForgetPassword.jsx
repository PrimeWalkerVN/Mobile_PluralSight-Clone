import { Button, Input, Text } from '@ui-kitten/components';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

export default function ForgetPassword() {
  const [value, setValue] = useState({ username: '', password: '' });

  const size = 'large';

  return (
    <View style={styles.container}>
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

      <Button style={styles.loginButton}>Send email</Button>
      <Button appearance="outline" style={styles.loginButton}>
        CANCEL
      </Button>
    </View>
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
