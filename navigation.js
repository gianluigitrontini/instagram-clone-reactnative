import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';
import NewPostScreen from './screens/NewPostScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};
export const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={screenOptions}>
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='NewPostScreen' component={NewPostScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
export const SignedOutStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName='LoginScreen'
      screenOptions={screenOptions}>
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
