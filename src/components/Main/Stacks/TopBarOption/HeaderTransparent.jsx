import { Button, Icon } from '@ui-kitten/components';
import React from 'react';

const HeaderTransparent = (props) => {
  const { navigation } = props;
  const canGoBack = navigation.canGoBack();
  return {
    title: '',
    headerTransparent: true,
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
export default HeaderTransparent;
