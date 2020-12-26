import { Button, Input, Layout, Modal, Text } from '@ui-kitten/components';
import React, { useContext, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
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
  const [ratings, setRatings] = useState(course.ratings);
  const context = useContext(UserContext);
  const inputRef = useRef('');

  const [formalityPoint, setFormalityPoint] = useState(5);
  const [contentPoint, setContentPoint] = useState(5);
  const [presentationPoint, setPresentationPoint] = useState(5);

  const [modalVisible, setModalVisible] = useState(false);

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
    snContext.loading.set(true);
    const contentValue = inputRef.current;
    if (contentValue === '') return;
    const params = { courseId: course.id, formalityPoint, contentPoint, presentationPoint, content: contentValue };
    try {
      const res = await coursesApi.ratingCourse(params);
      const newReview = { ...res.payload, user: context.user.get };

      setRatings((oldValue) => {
        const newArray = oldValue.ratingList.concat(newReview);
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
      {course && (
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
            Send Review
          </Button>
          <RatingList list={ratings.ratingList.reverse()} />
        </View>
      )}
      <Modal visible={modalVisible} animationType="fade" backdropStyle={styles.backdrop}>
        <Layout style={styles.reviewContainer}>
          <ScrollView>
            <View style={styles.ratingArea}>
              <Text category="label">Formality Point:</Text>
              <AirbnbRating
                count={5}
                reviews={['Terrible', 'Bad', 'Meh', 'Good', 'Very Good']}
                defaultRating={formalityPoint}
                onFinishRating={(value) => finishFormality(value)}
                reviewSize={14}
                size={20}
              />
            </View>
            <View style={styles.ratingArea}>
              <Text category="label">Content Point:</Text>
              <AirbnbRating
                count={5}
                reviews={['Terrible', 'Bad', 'Meh', 'Good', 'Very Good']}
                defaultRating={contentPoint}
                onFinishRating={(value) => finishContent(value)}
                reviewSize={14}
                size={20}
              />
            </View>
            <View style={styles.ratingArea}>
              <Text category="label">Presentation Point:</Text>
              <AirbnbRating
                count={5}
                reviews={['Terrible', 'Bad', 'Meh', 'Good', 'Very Good']}
                defaultRating={presentationPoint}
                onFinishRating={(value) => finishPresen(value)}
                reviewSize={14}
                size={20}
              />
            </View>

            <Input
              ref={inputRef}
              onChangeText={(value) => {
                inputRef.current = value;
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
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  reviewContainer: {
    padding: 10,
    borderRadius: 10,
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
});

export default Review;
