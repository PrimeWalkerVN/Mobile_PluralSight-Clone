import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import Stars from '../Common/Stars';
import formats from '../../constants/formats';

const formatString = formats.dateTime;
const CoursesInfo = (props) => {
  const { item } = props;
  const { width } = Dimensions.get('window');
  const { t } = useTranslation();
  return (
    <Layout style={[styles.infoArea, { width: width / 2 }]}>
      <Text numberOfLines={1} category="label">
        {item.title}
      </Text>
      <Text category="c1">{item['instructor.user.name']}</Text>
      <Text category="c1" numberOfLines={1}>
        {item && item.videoNumber} - {item && moment(item.updatedAt).format(formatString)} -
        {item.totalHours && item.totalHours.toFixed(2)} h
      </Text>
      <Stars
        value={Number.parseInt((item.formalityPoint + item.contentPoint + item.presentationPoint) / 3)}
        maxValue={5}
      />
      <View style={styles.meta}>
        {item.price > 0 ? (
          <Text status="warning">
            {item.price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 0,
            })}
          </Text>
        ) : (
          <Text status="success" category="s1">
            {t('free')}
          </Text>
        )}
        <Text category="c1" numberOfLines={1}>
          {item.soldNumber} {t('members')}
        </Text>
      </View>
    </Layout>
  );
};
const styles = StyleSheet.create({
  infoArea: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 10,
  },
  meta: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
    paddingRight: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default CoursesInfo;
