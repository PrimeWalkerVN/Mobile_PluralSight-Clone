import { Button, Input, Layout, Text } from '@ui-kitten/components';
import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AirbnbRating } from 'react-native-ratings';
import coursesApi from '../../../api/coursesApi';
import { SnackBarContext } from '../../../context/SnackBarContext';
import { UserContext } from '../../../context/UserContext';
import Rating from './Rating/Rating';
import RatingList from './RatingList/RatingList';

const Review = (props) => {
  const { course, isEnroll } = props;

  const snContext = useContext(SnackBarContext);
  const [ratings, setRatings] = useState(null);
  const context = useContext(UserContext);
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [contentValue, setContentValue] = useState();
  const [formalityPoint, setFormalityPoint] = useState(5);
  const [contentPoint, setContentPoint] = useState(5);
  const [presentationPoint, setPresentationPoint] = useState(5);

  useEffect(() => {
    if (course) {
      setRatings(course.ratings);
    }
  }, [course]);

  const toggleModal = () => {
    if (isEnroll) setModalVisible(!modalVisible);
    else {
      snContext.snackbar.set(true);
      snContext.snackbar.setData(`you have not taken this course!`);
    }
  };

  const finishFormality = (rating) => {
    setFormalityPoint(rating);
  };
  const finishContent = (rating) => {
    setContentPoint(rating);
  };
  const finishPresen = (rating) => {
    setPresentationPoint(rating);
  };

  const sendReview = async () => {
    if (contentValue === '') return;
    snContext.loading.set(true);
    const params = { courseId: course.id, formalityPoint, contentPoint, presentationPoint, content: contentValue };
    try {
      const res = await coursesApi.ratingCourse(params);
      const newReview = { ...res.payload, user: context.user.get };

      setRatings((oldValue) => {
        const newArray = [newReview, ...oldValue.ratingList];
        return {
          ...oldValue,
          ratingList: newArray,
        };
      });
      setModalVisible(false);
      snContext.snackbar.set(true);
      snContext.snackbar.setData(`Send review success!`);
    } catch (err) {
      snContext.snackbar.set(true);
      snContext.snackbar.setData(`${err.response.status} - ${err.response.data.message}`);
    } finally {
      snContext.loading.set(false);
    }
  };
  return (
    <Layout style={styles.container} level="2">
      {course && ratings && (
        <View>
          <Rating
            ratings={ratings}
            ratedNumber={course.ratedNumber}
            averagePoint={course.averagePoint}
            formalityPoint={course.formalityPoint}
            contentPoint={course.contentPoint}
            presentationPoint={course.presentationPoint}
          />

          <Button onPress={toggleModal} style={styles.buttonReview}>
            {t('sendReview')}
          </Button>
          <RatingList list={ratings.ratingList} />
        </View>
      )}
      <View style={styles.modal}>
        <Modal visible={modalVisible} animationType="fade" transparent>
          <Layout style={styles.reviewContainer}>
            <ScrollView>
              <View style={styles.ratingArea}>
                <Text category="label">Formality Point:</Text>
                <AirbnbRating
                  count={5}
                  reviews={['Terrible', 'Bad', 'Med', 'Good', 'Very Good']}
                  defaultRating={5}
                  onFinishRating={(value) => finishFormality(value)}
                  reviewSize={14}
                  size={20}
                />
              </View>
              <View style={styles.ratingArea}>
                <Text category="label">Content Point:</Text>
                <AirbnbRating
                  count={5}
                  reviews={['Terrible', 'Bad', 'Med', 'Good', 'Very Good']}
                  defaultRating={5}
                  onFinishRating={(value) => finishContent(value)}
                  reviewSize={14}
                  size={20}
                />
              </View>
              <View style={styles.ratingArea}>
                <Text category="label">Presentation Point:</Text>
                <AirbnbRating
                  count={5}
                  defaultRating={5}
                  reviews={['Terrible', 'Bad', 'Med', 'Good', 'Very Good']}
                  onFinishRating={(value) => finishPresen(value)}
                  reviewSize={14}
                  size={20}
                />
              </View>

              <Input
                onChangeText={(value) => {
                  setContentValue(value);
                }}
                clearButtonMode="always"
                size="large"
                label="Your review"
              />
              <View style={styles.submitArea}>
                <Button onPress={() => sendReview()} style={styles.buttonSubmit}>
                  Send
                </Button>
                <Button onPress={() => setModalVisible(false)} style={styles.buttonSubmit}>
                  Cancel
                </Button>
              </View>
            </ScrollView>
          </Layout>
        </Modal>
      </View>
    </Layout>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonReview: {
    width: 150,
    alignSelf: 'center',
    marginVertical: 10,
  },

  reviewContainer: {
    margin: 20,
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  ratingArea: {
    marginVertical: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  submitArea: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  buttonSubmit: {
    width: 120,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Review;
