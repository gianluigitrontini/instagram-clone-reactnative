import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import FormikPostUploader from './FormikPostUploader';

export default function AddNewPost() {
  return (
    <ScrollView alwaysBounceVertical={false} style={styles.container}>
      <FormikPostUploader />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
});
