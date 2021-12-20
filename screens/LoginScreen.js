import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LoginForm from '../components/auth/LoginForm';

import { useNavigation } from '@react-navigation/native';

const LOGO =
  'https://www.heron-yacht.it/wp-content/uploads/2019/10/instagram-logo-png-2426-300x300.png';

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView
        alwaysBounceVertical={false}
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <Image
          source={{ uri: LOGO, width: 100, height: 100 }}
          style={{ marginBottom: 64 }}
        />
        <LoginForm />

        <View
          style={{ flexDirection: 'row', alignItems: 'center', marginTop: 24 }}>
          <Text style={{ color: '#fff', marginRight: 4 }}>
            Don't have an account?
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={{ color: '#38a7ca' }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    paddingTop: Platform.OS === 'android' ? 28 : 0,
    backgroundColor: '#1a1a1a',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    padding: 16,
  },
});
