// navigators/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../src/screens/LoginPage';
import SignupScreen from '../src/screens/SignupScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}