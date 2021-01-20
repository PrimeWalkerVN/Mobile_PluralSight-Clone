import { Button, Icon, Layout } from '@ui-kitten/components';
import React from 'react';

const NoTitleTopBar = (props) => {
  const { navigation } = props;
  const canGoBack = navigation.canGoBack();
  return {
    title: '',
    headerBackground: () => <Layout level="2" style={{ flex: 1 }} />,
    headerLeft: () =>
      canGoBack ? (
        <Button
          appearance="ghost"
          status="control"
          onPress={() => navigation.goBack()}
          accessoryLeft={(props) => <Icon {...props} name="arrow-ios-back-outline" />}
        />
      ) : null,
  };
};
export default NoTitleTopBar;
