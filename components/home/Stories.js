import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { USERS } from '../../data/data';
import { LinearGradient } from 'expo-linear-gradient';

export default function Stories() {
  const Divider = () => {
    return <View style={{ borderTopWidth: 1, borderTopColor: '#333' }}></View>;
  };
  return (
    <View style={styles.storyContainer}>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 8, marginVertical: 24 }}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {USERS.map((story, i) => {
          return (
            <View key={i} style={{ alignItems: 'center' }}>
              <TouchableOpacity>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    paddingVertical: 4,
                  }}>
                  <Image
                    style={styles.story}
                    source={{
                      uri: story.image,
                    }}
                  />
                  <View style={styles.storyGradientContainer}>
                    <LinearGradient
                      colors={['#7700FF', '#FF0066']}
                      style={styles.storyGradient}
                    />
                  </View>
                </View>
              </TouchableOpacity>
              <Text numberOfLines={1} style={styles.userName}>
                {story.user}
              </Text>
            </View>
          );
        })}
      </ScrollView>
      <Divider />
    </View>
  );
}

const styles = StyleSheet.create({
  storyContainer: {
    backgroundColor: '#1a1a1a',
  },
  story: {
    width: 65,
    height: 65,
    borderRadius: 100,
    marginHorizontal: 10,
    zIndex: 1,

    borderColor: '#000',
    borderWidth: 3,
  },
  storyGradient: {
    width: '100%',
    height: '100%',
    borderRadius: 0,
    transform: [{ rotate: '-45deg' }],
  },
  storyGradientContainer: {
    width: 70,
    height: 70,
    borderRadius: 50,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 0,
  },
  userName: {
    fontSize: 12,
    color: '#fff',
    width: 75,
    textAlign: 'center',
    marginTop: 12,
  },
});
