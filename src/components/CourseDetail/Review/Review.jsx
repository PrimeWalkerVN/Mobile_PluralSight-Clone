import { Button, Input, Layout, Modal, Text } from '@ui-kitten/components';
import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import coursesApi from '../../../api/coursesApi';
import { SnackBarContext } from '../../../context/SnackBarContext';
import { UserContext } from '../../../context/UserContext';
import Rating from './Rating/Rating';
import RatingList from './RatingList/RatingList';

const Review = (props) => {
  const { course, isEnroll } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const snContext = useContext(SnackBarContext);
  const [ratings, setRatings] = useState(course.ratings);
  const context = useContext(UserContext);

  const [review, setReview] = useState({
    formalityPoint: 5,
    contentPoint: 5,
    presentationPoint: 5,
  });
  const [content, setContent] = useState('');
  const toggleModal = () => {
    if (isEnroll) setModalVisible(!modalVisible);
    else {
      snContext.snackbar.set(true);
      snContext.snackbar.setData(`you have not taken this course!`);
    }
  };

  const finishFormality = (rating) => {
    setReview({ ...review, formalityPoint: rating });
  };
  const finishContent = (rating) => {
    setReview({ ...review, contentPoint: rating });
  };
  const finishPresen = (rating) => {
    setReview({ ...review, presentationPoint: rating });
  };

  const sendReview = async () => {
    if (content === '') return;
    const params = { courseId: course.id, ...review, content };
    snContext.loading.set(true);
    try {
      const res = await coursesApi.ratingCourse(params);
      const newReview = { ...res.payload, user: context.user.get };
      setRatings({ ...ratings, ratingList: ratings.ratingList.unshift(newReview) });
      toggleModal();
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
          <RatingList list={course.ratings.ratingList} />
          <Modal visible={modalVisible} animationType="fade" backdropStyle={styles.backdrop}>
            <Layout style={styles.reviewContainer}>
              <KeyboardAwareScrollView
                resetScrollToCoords={{ x: 0, y: 0 }}
                scrollEnabled
                showsVerticalScrollIndicator={false}
              >
                <View style={styles.ratingArea}>
                  <Text category="label">Formality Point:</Text>
                  <AirbnbRating
                    count={5}
                    reviews={['Terrible', 'Bad', 'Meh', 'Good', 'Very Good']}
                    defaultRating={review.formalityPoint}
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
                    defaultRating={review.contentPoint}
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
                    defaultRating={review.presentationPoint}
                    onFinishRating={(value) => finishPresen(value)}
                    reviewSize={14}
                    size={20}
                  />
                </View>
                <Input onChangeText={(value) => setContent(value)} size="large" multiline label="Your review" />
                <View style={styles.submitArea}>
                  <Button onPress={sendReview} style={styles.buttonSubmit}>
                    Send
                  </Button>
                  <Button onPress={() => setModalVisible(false)} style={styles.buttonSubmit}>
                    Cancel
                  </Button>
                </View>
              </KeyboardAwareScrollView>
            </Layout>
          </Modal>
        </View>
      )}
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
    width: 300,
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
