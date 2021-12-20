import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RegisterForm from '../components/auth/RegisterForm';

const LOGO =
  'https://www.heron-yacht.it/wp-content/uploads/2019/10/instagram-logo-png-2426-300x300.png';

export default function RegisterScreen() {
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
        <RegisterForm />
        <View
          style={{ flexDirection: 'row', alignItems: 'center', marginTop: 24 }}>
          <Text style={{ color: '#fff', marginRight: 4 }}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={{ color: '#38a7ca' }}>Sign In</Text>
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
