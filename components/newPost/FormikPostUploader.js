import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, StyleSheet, Button } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import validUrl from 'valid-url';
import { firebase, auth, db } from '../../firebase';

const PLACEHOLDER_IMAGE =
  'https://innovationafricaltd.com/wp-content/uploads/2020/12/image-placeholder-350x350-1.png';

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required('A URL is required'),
  caption: Yup.string()
    .max(500, 'Caption has reached the character limit.')
    .required('A caption is required.'),
});

export default function FormikPostUploader() {
  const navigation = useNavigation();

  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null);

  const getUsername = () => {
    const user = auth.currentUser;
    const unsubscribe = db
      .collection('users')
      .where('owner_uid', '==', user.uid)
      .limit(1)
      .onSnapshot((snapshot) =>
        snapshot.docs.map((doc) => {
          setCurrentLoggedInUser({
            username: doc.data().username,
            profilePicture: doc.data().profilePicture,
          });
        })
      );

    return unsubscribe;
  };
  useEffect(() => {
    getUsername();
  }, []);

  const uploadPostToFirebase = (imageUrl, caption) => {
    const unsubscribe = db
      .collection('users')
      .doc(auth.currentUser.email)
      .collection('posts')
      .add({
        imageUrl: imageUrl,
        user: currentLoggedInUser.username,
        profile_picture: currentLoggedInUser.profilePicture,
        owner_uid: auth.currentUser.uid,
        owner_email: auth.currentUser.email,
        caption: caption,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        likes: 0,
        likes_by_users: [],
        comments: [],
      })
      .then(() => navigation.goBack());

    return unsubscribe;
  };

  return (
    <Formik
      initialValues={{ caption: '', imageUrl: '' }}
      onSubmit={(values) => {
        uploadPostToFirebase(values.imageUrl, values.caption);
      }}
      validationSchema={uploadPostSchema}
      validateOnMount>
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
      }) => (
        <>
          <View style={styles.imageCaptionContainer}>
            <Image
              source={{
                uri:
                  validUrl.isUri(thumbnailUrl) && !errors.imageUrl
                    ? thumbnailUrl
                    : PLACEHOLDER_IMAGE,
              }}
              style={styles.imageBox}
            />
            <View style={styles.captionInputWrapper}>
              <TextInput
                textAlign='left'
                textAlignVertical='top'
                style={styles.captionInput}
                placeholder='Write a caption...'
                placeholderTextColor={'#999'}
                multiline
                onChangeText={handleChange('caption')}
                onBlur={handleBlur('caption')}
                value={values.caption}
              />
              {errors.caption && touched.caption && (
                <Text style={styles.errorText}>{errors.caption}</Text>
              )}
            </View>
          </View>

          <TextInput
            onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
            style={styles.urlInput}
            placeholder='Enter image url'
            placeholderTextColor={'#999'}
            onChangeText={handleChange('imageUrl')}
            onBlur={handleBlur('imageUrl')}
            value={values.imageUrl}
          />
          {errors.imageUrl && touched.imageUrl && (
            <Text style={styles.errorText}>{errors.imageUrl}</Text>
          )}
          <View style={{ marginVertical: 14 }}>
            <Button
              style={styles.button}
              onPress={handleSubmit}
              title='Share'
              disabled={!isValid}></Button>
          </View>
        </>
      )}
    </Formik>
  );
}
const styles = StyleSheet.create({
  imageBox: {
    width: 100,
    height: 100,
    borderRadius: 2,
  },
  imageCaptionContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  captionInputWrapper: {
    flex: 0.95,
  },
  captionInput: {
    color: '#fff',
    borderColor: '#2a2a2a',
    backgroundColor: '#222',
    borderWidth: 1,
    borderRadius: 5,
    padding: 4,
    minHeight: 100,
    fontSize: 16,
  },
  urlInput: {
    color: '#fff',
    borderColor: '#2a2a2a',
    backgroundColor: '#222',
    borderWidth: 1,
    borderRadius: 5,
    padding: 4,
    marginTop: 12,
    fontSize: 16,
  },
  errorText: {
    color: '#faa',
    fontSize: 12,
    marginTop: 4,
  },
  button: {
    paddingVertical: 10,
  },
});
