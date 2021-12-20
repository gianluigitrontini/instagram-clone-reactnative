import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import HeaderTitle from '../components/global/HeaderTitle';
import BottomNavigation from '../components/home/BottomNavigation';
import AddNewPost from '../components/newPost/AddNewPost';

export default function NewPostScreen() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <HeaderTitle title={'New Post'} />
      <AddNewPost />
      <BottomNavigation />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 28 : 0,
    backgroundColor: '#1a1a1a',
  },
});
