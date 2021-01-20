import { Button, Icon, Layout, Text } from '@ui-kitten/components';
import React from 'react';

const HeaderTopTab = (props) => {
  const { navigation, route } = props;
  const canGoBack = navigation.canGoBack();
  return {
    title: <Text category="h5">{route.name}</Text>,
    headerBackground: () => <Layout level="2" style={{ flex: 1 }} />,
    headerLeft: () =>
      canGoBack ? (
        <Button
          appearance="ghost"
          status="basic"
          onPress={() => navigation.goBack()}
          accessoryLeft={(props) => <Icon {...props} name="arrow-ios-back-outline" />}
        />
      ) : null,
  };
};
export default HeaderTopTab;
