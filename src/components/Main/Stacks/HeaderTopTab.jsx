import { Button, Icon, Layout, Text } from '@ui-kitten/components';
import React from 'react';

const HeaderTopTab = (props) => {
  const { navigation, route } = props;
  return {
    title: <Text category="h5">{route.name}</Text>,
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
export default HeaderTopTab;
