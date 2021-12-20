import React from 'react';
import {
  View,
  SafeAreaView,
  Platform,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={{
            uri: 'https://www.pngkey.com/png/full/1-13459_instagram-font-logo-white-png-instagram-white-text.png',
          }}
          resizeMode='contain'
          style={styles.logo}
        />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity
          style={styles.pressable}
          onPress={() => navigation.push('NewPostScreen')}>
          <Image
            source={{
              uri: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/plus-2-math.png',
            }}
            resizeMode='contain'
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.pressable}>
          <Image
            source={{
              uri: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/hearts.png',
            }}
            resizeMode='contain'
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ ...styles.pressable, position: 'relative' }}>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>2</Text>
          </View>
          <Image
            source={{
              uri: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/chat-message.png',
            }}
            resizeMode='contain'
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
  },
  iconsContainer: {
    flexDirection: 'row',
    flex: 0.6,
    justifyContent: 'space-between',
  },
  logo: {
    // flex: 0.3,
    width: 100,
    height: 40,
  },
  pressable: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  text: {
    color: '#fff',
  },
  unreadBadge: {
    position: 'absolute',
    borderRadius: 25,
    backgroundColor: '#ff3250',
    width: 20,
    height: 15,
    zIndex: 2,
    top: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unreadBadgeText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
  },
});
