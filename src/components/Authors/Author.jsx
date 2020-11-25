import { Button, Icon, Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AvatarLarge from '../Common/AvatarLarge';
import ContentDropdown from '../Common/ContentDropdown';
import FlatListCourse from '../Courses/FlatListCourse';

const Author = (props) => {
  const { author } = props.route.params;
  const { navigation } = props;

  const facebookIcon = (props) => <Icon {...props} name="facebook" />;
  const twitterIcon = (props) => <Icon {...props} name="twitter" />;
  const linkIcon = (props) => <Icon {...props} name="link" />;
  const courses = [
    {
      id: 1,
      title: 'Android',
      author: 'Chi Thanh',
      level: 'Advance',
      released: 'May 6, 2020',
      duration: '3 h',
    },
    {
      id: 2,
      title: 'Android',
      author: 'Chi Thanh',
      level: 'Advance',
      released: 'May 6, 2020',
      duration: '3 h',
    },
    {
      id: 3,
      title: 'Android',
      author: 'Chi Thanh',
      level: 'Advance',
      released: 'May 6, 2020',
      duration: '3 h',
    },
    {
      id: 4,
      title: 'Android',
      author: 'Chi Thanh',
      level: 'Advance',
      released: 'May 6, 2020',
      duration: '3 h',
    },
    {
      id: 5,
      title: 'Android',
      author: 'Chi Thanh',
      level: 'Advance',
      released: 'May 6, 2020',
      duration: '3 h',
    },
  ];
  return (
    <Layout style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <AvatarLarge name={author.name} />
          <Text style={styles.text}>PluralSight Author</Text>
          <Button style={styles.buttonFollow} appearance="primary" size="large">
            FOLLOW
          </Button>
          <Text style={styles.text} category="p2">
            Follow to be notified when new courses are published
          </Text>
          <ContentDropdown height={150}>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quas natus, officiis qui voluptatibus nostrum
              fuga, voluptatem recusandae nihil suscipit labore magni non culpa consequuntur alias voluptates nisi,
              iusto iure?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque quam voluptatibus deserunt,
              impedit sit optio omnis possimus exercitationem praesentium voluptas iure modi nemo consequuntur. Ad
              praesentium dolorem sunt iure tempore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              consequuntur voluptatum optio minus consequatur veritatis repellendus, voluptatem similique laboriosam ex
              accusantium quaerat architecto earum rem voluptatibus vitae iure qui veniam!
            </Text>
          </ContentDropdown>
          <Button appearance="ghost" status="control" style={styles.buttonFollow} accessoryLeft={linkIcon}>
            Link 11212121212121221212
          </Button>
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
