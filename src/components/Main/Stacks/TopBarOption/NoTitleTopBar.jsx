import { Button, Icon, Layout } from '@ui-kitten/components';
import React from 'react';

const NoTitleTopBar = (props) => {
  const { navigation } = props;
  return {
    title: '',
    headerBackground: () => <Layout style={{ flex: 1 }} />,
    headerLeft: () => (
      <Button
        appearance="ghost"
        status="control"
        onPress={() => navigation.goBack()}
        accessoryLeft={(props) => <Icon {...props} name="arrow-ios-back-outline" />}
      />
    ),
  };
};
export default NoTitleTopBar;
