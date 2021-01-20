import { Spinner, Text } from '@ui-kitten/components';
import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';

export default function Loading() {
  return (
    <Modal transparent animationType="fade">
      <View style={styles.container}>
        <Text style={styles.loading}>
          <Spinner size="large" />
        </Text>
        <Text>Loading</Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    display: 'flex',
  },
});
