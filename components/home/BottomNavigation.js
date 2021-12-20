import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import { bottomNavigation } from '../../data/data';
import Icon from '../global/Icon';

export default function BottomNavigation() {
  const [active, setActive] = useState('Home');
  return (
    <View style={styles.container}>
      {bottomNavigation.map((icon) => {
        return (
          <TouchableWithoutFeedback
            key={icon.name}
            style={{ flex: 1, height: 30 }}
            onPress={() => setActive(icon.name)}>
            <Icon
              style={styles.icon}
              iconUrl={active === icon.name ? icon.active : icon.inactive}
              resizeMode='contain'
            />
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderTopWidth: 1,
    borderColor: '#aaa',
  },
  icon: {
    flex: 1,
    height: 30,
  },
});
