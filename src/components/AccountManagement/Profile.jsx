import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import AvatarLargeV2 from '../Common/AvatarLargeV2';

export default function Profile() {
  return (
    <Layout style={styles.container}>
      <View style={styles.header}>
        <AvatarLargeV2 name="Chi Thanh" />
      </View>
      <View style={styles.body}>
        <Text category="h5">Activity insights(last 30days)</Text>
        <View style={styles.content}>
          <Text>TOTAL ACTIVE DAYS</Text>
          <Text category="h6">0</Text>
        </View>
        <View style={styles.content}>
          <Text>MOSt ACtiVE TIME OF DAY</Text>
          <Text category="h6">7:00 AM</Text>
        </View>
        <View style={styles.content}>
          <Text>MOST VIEWED SUBJECT</Text>
          <Text category="h6">N/A</Text>
        </View>
      </View>
    </Layout>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
  },
  body: {
    marginHorizontal: 10,
    marginVertical: 50,
    flex: 1,
  },
  content: {
    marginVertical: 30,
  },
});
