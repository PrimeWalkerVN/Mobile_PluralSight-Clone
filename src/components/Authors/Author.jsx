import { Button, Icon, Layout, Text } from '@ui-kitten/components';
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import instructorsApi from '../../api/instructorsApi';
import { SnackBarContext } from '../../context/SnackBarContext';
import AvatarLargeV2 from '../Common/AvatarLargeV2';
import ContentDropdown from '../Common/ContentDropdown';
import FlatListCourse from '../Courses/FlatListCourse';

const Author = (props) => {
  const { author } = props.route.params;
  const { navigation } = props;
  const snContext = useContext(SnackBarContext);
  const [courses, setCourse] = useState([]);

  const getData = async () => {
    try {
      const res = await instructorsApi.getDetailInstructors({ id: author.id });
      setCourse(res.payload.courses);
    } catch (err) {
      snContext.snackbar.set(true);
      snContext.snackbar.setData(`${err.response.status} - ${err.response.data.message}`);
    } finally {
      snContext.loading.set(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const facebookIcon = (props) => <Icon {...props} name="facebook" />;
  const twitterIcon = (props) => <Icon {...props} name="twitter" />;
  const linkIcon = (props) => <Icon {...props} name="link" />;

  return (
    <Layout style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <AvatarLargeV2 name={author['user.name']} image={author['user.avatar']} />
          <Text style={styles.text}>PluralSight Author</Text>
          <Button style={styles.buttonFollow} appearance="primary" size="large">
            FOLLOW
          </Button>
          <Text style={styles.text} category="p2">
            Follow to be notified when new courses are published
          </Text>
          <ContentDropdown height={50}>
            <Text category="s1">Intro: </Text>
            <Text category="p2">- {author.intro}</Text>
            <Text category="s1">Skill:</Text>
            {author.skills &&
              author.skills.map((item, index) => (
                <Text category="p2" key={index}>
                  - {item}
                </Text>
              ))}
          </ContentDropdown>
          <Button appearance="ghost" status="control" style={styles.buttonFollow} accessoryLeft={linkIcon}>
            Link 11212121212121221212
          </Button>
          <Text style={styles.text} category="s1">
            Phone: {author['user.phone']}
          </Text>
          <View style={styles.row}>
            <Button size="large" status="control" appearance="ghost" accessoryLeft={facebookIcon} />
            <Button size="large" status="control" appearance="ghost" accessoryLeft={twitterIcon} />
          </View>
        </View>
        <Text style={styles.text} category="h6">
          Courses
        </Text>
        <FlatListCourse items={courses} navigation={navigation} />
      </ScrollView>
    </Layout>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 10,
    alignItems: 'center',
  },
  text: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  buttonFollow: {
    width: '100%',
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    display: 'flex',
  },
  title: {
    paddingLeft: 100,
  },
});
export default Author;
