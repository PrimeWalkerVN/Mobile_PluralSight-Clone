import { Button, Icon, Input, Layout, Text } from '@ui-kitten/components';
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import usersApi from '../../api/usersApi';
import { SnackBarContext } from '../../context/SnackBarContext';
import { UserContext } from '../../context/UserContext';

const ChangePassword = (props) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [oldPsw, setOldPsw] = useState('');
  const [newPsw, setNewPsw] = useState('');
  const [confirmPsw, setConfirmPsw] = useState('');
  const [pswErr, setPswErr] = useState('');
  const context = useContext(UserContext);
  const snContext = useContext(SnackBarContext);
  const { navigation } = props;

  useEffect(() => {
    if (newPsw < 6 && newPsw !== '') setPswErr('Should contain at least 6 symbols');
    else if (newPsw !== confirmPsw) setConfirmPsw('Confirm password was not match!');
    else {
      setPswErr('');
    }
  }, []);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  const submitHandler = async () => {
    if (newPsw === '') return;
    const params = {
      id: context.user.get,
      oldPass: oldPsw,
      newPass: newPsw,
    };
    snContext.loading.set(true);
    try {
      await usersApi.changePassword(params);
      snContext.snackbar.set(true);
      snContext.snackbar.setData(`Change password success!`);
      navigation.goBack();
    } catch (err) {
      snContext.snackbar.set(true);
      snContext.snackbar.setData(`${err.response.status} - ${err.response.data.message}`);
    } finally {
      snContext.loading.set(false);
    }
  };

  return (
    <Layout level="2" style={styles.container}>
      <Text style={styles.header} category="h6" status="info">
        Please input right old password and set new password!
      </Text>
      <Input
        style={styles.input}
        secureTextEntry={secureTextEntry}
        label="Old Password"
        placeholder=""
        autoCapitalize="none"
        key="oldPsw"
        onChangeText={(value) => setOldPsw(value)}
        accessoryRight={renderIcon}
      />
      <Input
        style={styles.input}
        secureTextEntry={secureTextEntry}
        label="New Password"
        placeholder=""
        autoCapitalize="none"
        caption={pswErr.length > 0 ? pswErr : 'Should contain at least 6 symbols'}
        status={pswErr !== '' ? 'danger' : 'primary'}
        key="newPsw"
        onChangeText={(value) => setNewPsw(value)}
        accessoryRight={renderIcon}
      />
      <Input
        style={styles.input}
        secureTextEntry={secureTextEntry}
        label="Confirm password"
        placeholder=""
        autoCapitalize="none"
        onChangeText={(value) => setConfirmPsw(value)}
        key="confirmPsw"
        accessoryRight={renderIcon}
      />
      <Button onPress={submitHandler} style={styles.submitButton}>
        Change
      </Button>
    </Layout>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    marginVertical: 10,
  },
  input: {
    marginVertical: 5,
  },
  submitButton: {
    marginVertical: 10,
  },
});

export default ChangePassword;
