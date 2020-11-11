import { Input, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Transcript = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Input style={styles.header} size="large" placeholder="Search transcript" />
        <View>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut laborum fugit recusandae voluptatum corrupti
            aspernatur odit ea culpa quo eveniet! Delectus earum vero ipsa sed sit, atque beatae dolore tempore. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dignissimos fugiat adipisci incidunt
            deleniti nobis alias dolore temporibus, maxime, id numquam culpa veritatis, obcaecati quam? Repellat animi
            ipsam ex rerum!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginVertical: 10,
  },
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
});
export default Transcript;
