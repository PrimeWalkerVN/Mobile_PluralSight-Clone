import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { SnackBarContext } from '../../context/SnackBarContext';
import Loading from './Loading';

const MySnackBar = () => {
  const context = useContext(SnackBarContext);
  return (
    <View>
      {context.snackbar.get && (
        <Snackbar
          style={styles.container}
          visible={context.snackbar.get}
          action={{
            label: context.snackbar.getLabel,
            onPress: () => context.snackbar.getOnPress,
          }}
          onDismiss={() => context.snackbar.set(false)}
        >
          {context.snackbar.getData}
        </Snackbar>
      )}
      {context.loading.get && <Loading />}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MySnackBar;
