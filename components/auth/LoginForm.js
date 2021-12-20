import React from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { auth } from '../../firebase';

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required('An email or username is required.'),
  password: Yup.string()
    .required()
    .min(6, 'Your password needs to be at least 6 characters.'),
});

const onLogin = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    console.log('User logged in with email', email, 'and password', password);
  } catch (error) {
    Alert.alert(error.message);
  }
};
export default function LoginForm() {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => {
        onLogin(values.email, values.password);
      }}
      validationSchema={loginSchema}
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
          <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder='Email'
            placeholderTextColor={'#aaa'}
            textAlign='left'
            autoCapitalize='none'
            keyboardType='email-address'
            textContentType='emailAddress'
            autoFocus={true}
            style={[
              styles.input,
              {
                borderColor:
                  errors.email && touched.email && values.email.length > 0
                    ? '#f00'
                    : '#2a2a2a',
              },
            ]}
          />

          <TextInput
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            placeholder='Password'
            placeholderTextColor={'#aaa'}
            textAlign='left'
            secureTextEntry
            autoCorrect={false}
            autoCapitalize='none'
            textContentType='password'
            style={[
              styles.input,
              {
                borderColor:
                  errors.password &&
                  touched.password &&
                  values.password.length > 0
                    ? '#f00'
                    : '#2a2a2a',
              },
            ]}
          />

          <View style={{ marginVertical: 14, width: '100%' }}>
            <Pressable
              style={styles.button(isValid)}
              onPress={handleSubmit}
              disabled={!isValid}>
              <Text style={{ color: '#fff' }}>Login</Text>
            </Pressable>
          </View>
        </>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderColor: '#2a2a2a',
    borderWidth: 1,
    backgroundColor: '#222',
    padding: 8,
    borderRadius: 5,
    fontSize: 18,
    marginVertical: 14,
    color: '#fff',
  },
  button: (isValid) => ({
    backgroundColor: isValid ? '#38a7ca' : '#93d4e8',
    minHeight: 42,
    width: '100%',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  }),
});
