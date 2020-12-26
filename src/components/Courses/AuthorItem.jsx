import { Avatar, Layout, StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import React, { useContext } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import instructorsApi from '../../api/instructorsApi';
import navNames from '../../constants/navNames';
import { SnackBarContext } from '../../context/SnackBarContext';

const AuthorItem = (props) => {
  const styles = useStyleSheet(themedStyles);
  const { item, navigation } = props;
  const snContext = useContext(SnackBarContext);

  const clickHandlerAuthor = async (item) => {
    snContext.loading.set(true);
    try {
      const res = await instructorsApi.getDetailInstructors({ id: item.id });
      const author = { ...res.payload };
      author['user.name'] = res.payload.name;
      author['user.phone'] = res.payload.phone;
      author['user.avatar'] = res.payload.avatar;
      navigation.navigate(navNames.author, { author });
    } catch (err) {
      snContext.snackbar.set(true);
      snContext.snackbar.setData(`${err.response.status} - ${err.response.data.message}`);
    } finally {
      snContext.loading.set(false);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => clickHandlerAuthor(item)}>
      <Layout style={styles.container} key={item.id}>
        <Avatar size="giant" source={{ uri: item.avatar }} />
        <View style={styles.info}>
          <Text category="h6">{item.name}</Text>
          <Text category="p2">{item.numcourses} courses</Text>
        </View>
      </Layout>
    </TouchableWithoutFeedback>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 80,
    resizeMode: 'cover',
  },
  info: {
    flex: 1,
    marginHorizontal: 20,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
export default AuthorItem;
