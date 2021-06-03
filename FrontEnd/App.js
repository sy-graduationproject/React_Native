import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import 'react-native-gesture-handler';
import Navigation from './Navigation'
import Login from './Login';
import Register from './Register';
import Recipe from './Recipe';
import QnA from './QnA';
import Doc from './Doc';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Navigation" component={Navigation} />
        <Stack.Screen name="QnA" component={QnA}/>
        <Stack.Screen name="Doc" component={Doc}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}