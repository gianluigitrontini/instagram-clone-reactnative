import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Platform,
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';
import BottomNavigation from '../components/home/BottomNavigation';
import Header from '../components/home/Header';
import Post from '../components/home/Post';
import Stories from '../components/home/Stories';
// import { POSTS } from '../data/data';
import { db } from '../firebase';

export default function HomeScreen() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    db.collectionGroup('posts').onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, [posts]);
  return (
    <SafeAreaView style={styles.safeContainer}>
      <Header />
      <ScrollView>
        <Stories />
        {posts && posts.length > 0 ? (
          posts.map((post, i) => {
            return <Post key={i} post={post} />;
          })
        ) : (
          <Text
            style={{
              color: '#9a9a9a',
              textAlign: 'center',
              backgroundColor: '#2a2a2a',
              margin: 16,
              padding: 8,
              borderRadius: 4,
            }}>
            There are no posts from your friends yet. Be the first to create
            one.
          </Text>
        )}
      </ScrollView>
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
