import { Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ImageButton from '../../Common/ImageButton';
import SectionButtons from './SectionButtons';

const Browse = () => {
  return (
    <View style={styles.container}>
      <View>
        <ImageButton title="NEW RELEASES" />
        <ImageButton title="RECOMMENDED FOR YOU" />
      </View>
      <SectionButtons />
      <View>
        <Text>Popular skill</Text>
      </View>
      <View>
        <Text>Paths</Text>
      </View>
      <View>
        <Text>Top authors</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Browse;
