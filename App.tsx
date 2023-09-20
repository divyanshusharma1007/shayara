/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';
import Category from './src/screens/Category';

const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  return (
    <>
      <NavigationContainer
      >
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation:'slide_from_left',
            animationDuration:0.2
          }}
          initialRouteName='login'>
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="signup" component={SignUpScreen} />
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="category" component={Category} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
