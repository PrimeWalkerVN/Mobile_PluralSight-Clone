import { Button, Layout, Text } from '@ui-kitten/components';
import moment from 'moment';
import React, { useContext } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import navNames from '../../constants/navNames';
import { UserContext } from '../../context/UserContext';
import AvatarLargeV2 from '../Common/AvatarLargeV2';

export default function Profile(props) {
  const { navigation } = props;
  const context = useContext(UserContext);
  const user = context.user.get;
  const Content = (props) => {
    const { label, sub } = props;
    return (
      <View style={styles.content}>
        <Text category="h6">{label}</Text>
        <Text style={styles.subContent}>{sub}</Text>
      </View>
    );
  };
  return (
    <Layout style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <AvatarLargeV2 name={user.email} image={user.avatar} />
        </View>
        <Button onPress={() => navigation.navigate(navNames.changePassword)} size="small" style={styles.button}>
          Change password
        </Button>
        <Button onPress={() => navigation.navigate(navNames.changeProfile)} size="small" style={styles.button}>
          Change profile
        </Button>
        <View style={styles.body}>
          <Content label="FullName:" sub={user.name} />
          <Content label="Created at:" sub={moment(user.createdAt).fromNow()} />
          <Content label="Phone Number:" sub={user.phone} />
          <Content label="Type:" sub={user.type} />
          <Content label="Point:" sub={user.point} />
        </View>
      </ScrollView>
    </Layout>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  body: {
    marginHorizontal: 10,
    marginVertical: 20,
    flex: 1,
  },
  content: {
    marginVertical: 10,
  },
  subContent: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
