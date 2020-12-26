import AsyncStorage from '@react-native-async-storage/async-storage';
import { Avatar, Button, Input, Layout } from '@ui-kitten/components';
import Axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import usersApi from '../../api/usersApi';
import { SnackBarContext } from '../../context/SnackBarContext';
import { UserContext } from '../../context/UserContext';

const ChangeProfile = (props) => {
  const { navigation } = props;
  const context = useContext(UserContext);
  const snContext = useContext(SnackBarContext);
  const user = context.user.get;
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [image, setImage] = useState(user.avatar);

  const submitHandler = async () => {
    if (name === user.name && phone === user.phone) return;
    snContext.loading.set(true);
    const params = {
      name,
      phone,
    };
    try {
      await usersApi.updateProfile(params);
      context.user.set({ ...user, name, phone });
      snContext.snackbar.set(true);
      snContext.snackbar.setData(`Update Success`);
      navigation.goBack();
    } catch (err) {
      snContext.snackbar.set(true);
      snContext.snackbar.setData(`${err.response.status} - ${err.response.data.message}`);
    } finally {
      snContext.loading.set(false);
    }
  };

  const uploadAvatar = async (image) => {
    snContext.loading.set(true);
    const localUri = image;
    const filename = localUri.split('/').pop();

    const match = /\.(\w+)$/.exec(filename);
    const type = match ? `image/${match[1]}` : `image`;

    // eslint-disable-next-line no-undef
    const formData = new FormData();
    formData.append('avatar', { uri: localUri, name: filename, type });
    const token = await AsyncStorage.getItem('access_token');
    const config = {
      headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}` },
    };
    try {
      const res = await Axios.post('http://api.dev.letstudy.org/user/upload-avatar', formData, config);
      context.user.set({ ...user, avatar: res.data.payload.url });
      snContext.snackbar.set(true);
      snContext.snackbar.setData(`Update Success`);
      navigation.goBack();
    } catch (err) {
      snContext.snackbar.set(true);
      snContext.snackbar.setData(`${err.response.status} - ${err.response.data.message}`);
    } finally {
      snContext.loading.set(false);
    }
  };
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 0.3,
    });
    if (!result.cancelled) {
      setImage(result.uri);
      uploadAvatar(result.uri);
    }
  };
  return (
    <Layout level="2" style={styles.container}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.upload}>
          {image && <Avatar source={{ uri: image }} style={styles.image} />}
          <Button style={styles.buttonUpload} onPress={pickImage}>
            Upload
          </Button>
        </View>

        <Input style={styles.input} label="Email" disabled placeholder="" key="email" value={user.email} />
        <Input
          style={styles.input}
          label="Full Name"
          placeholder=""
          key="fullName"
          value={name}
          onChangeText={(value) => setName(value)}
        />
        <Input
          style={styles.input}
          label="Phone Number"
          placeholder=""
          key="phoneNumber"
          value={phone}
          onChangeText={(value) => setPhone(value)}
        />
        <Button onPress={submitHandler} style={styles.submitButton}>
          Change
        </Button>
      </KeyboardAwareScrollView>
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
  upload: {
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
  },
  buttonUpload: {
    width: 150,
    marginVertical: 20,
  },
});

export default ChangeProfile;
