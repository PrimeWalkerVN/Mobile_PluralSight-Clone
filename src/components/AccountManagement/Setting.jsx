import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Divider, Layout, Text } from '@ui-kitten/components';
import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Switch, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ThemeLangContext } from '../../context/ThemeLangContext';
import { UserContext } from '../../context/UserContext';
import AvatarLargeV2 from '../Common/AvatarLargeV2';

const Setting = () => {
  const context = useContext(UserContext);
  const themeContext = useContext(ThemeLangContext);
  const { t, i18n } = useTranslation();
  const user = context.user.get;

  useEffect(() => {
    return async () => {
      themeContext.theme.saveTheme();
      await AsyncStorage.setItem('lang', i18n.language);
    };
  }, [themeContext.theme.get, i18n.language]);
  const logout = () => {
    context.user.logout();
  };
  const toggleSwitch = () => {
    if (themeContext.theme.get === 'dark') {
      themeContext.theme.set('light');
    } else {
      themeContext.theme.set('dark');
    }
  };
  const SwitchButton = () => (
    <View>
      <Switch ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} value={themeContext.theme.get === 'dark'} />
    </View>
  );
  const toggleSwitchLanguage = () => {
    if (i18n.language === 'en') {
      i18n.changeLanguage('vi');
    } else {
      i18n.changeLanguage('en');
    }
  };
  const SwitchButtonLanguage = () => (
    <View>
      <Switch ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitchLanguage} value={i18n.language === 'vi'} />
    </View>
  );
  return (
    <Layout style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <AvatarLargeV2 name={user && user.email} image={user && user.avatar} />
        </View>
        <Divider />
        <View style={styles.content}>
          <Button style={styles.button} status="basic" size="large" appearance="ghost" accessoryRight={SwitchButton}>
            {t('themeDark')}
          </Button>
          {/* {/* <Button style={styles.button} status="basic" size="large" appearance="ghost" accessoryRight={SwitchButton}>
            Require Wi-Fi for downloading
          </Button> */}
          <Button
            style={styles.button}
            status="basic"
            size="large"
            appearance="ghost"
            accessoryRight={SwitchButtonLanguage}
          >
            {t('vietnamese')}
          </Button>

          <Button style={styles.button} status="basic" appearance="ghost" size="large">
            {t('notifications')}
          </Button>
          <Button style={styles.button} status="basic" appearance="ghost" size="large">
            {t('advancedOptions')}
          </Button>
          <Button style={styles.button} status="basic" appearance="ghost" size="large">
            {t('downloadLocation')}
          </Button>
        </View>
        <Divider />
        <Text style={styles.version} category="h6">
          {t('appVersion')}: 1.0
        </Text>
        <Divider />
        <Button style={styles.buttonLogout} onPress={logout} appearance="primary" size="large">
          {t('logout')}
        </Button>
      </ScrollView>
    </Layout>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  content: {
    marginVertical: 20,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  version: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  buttonLogout: {
    margin: 10,
    borderRadius: 10,
  },
});
export default Setting;
