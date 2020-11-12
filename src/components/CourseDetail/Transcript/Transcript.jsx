import { Input, Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Transcript = () => {
  return (
    <Layout style={styles.container}>
      <Input style={styles.header} size="large" placeholder="Search transcript" />
      <View>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut laborum fugit recusandae voluptatum corrupti
          aspernatur odit ea culpa quo eveniet! Delectus earum vero ipsa sed sit, atque beatae dolore tempore. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dignissimos fugiat adipisci incidunt
          deleniti nobis alias dolore temporibus, maxime, id numquam culpa veritatis, obcaecati quam? Repellat animi
          ipsam ex rerum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut ullam similique non debitis
          molestias et aspernatur libero vel eaque iure. Voluptatibus perferendis similique porro distinctio reiciendis,
          asperiores doloribus sequi minus!
        </Text>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    marginVertical: 10,
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
export default Transcript;
