import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from './Icon';
import { useNavigation } from '@react-navigation/native';

export default function HeaderTitle({ title }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          iconUrl={
            'https://img.icons8.com/ios-glyphs/48/ffffff/chevron-left.png'
          }
        />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>
      <View style={{ width: 25 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
