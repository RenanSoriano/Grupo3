// navigators/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../src/screens/LoginPage';
import SignupScreen from '../src/screens/SignupScreen';
import TaskScreen from '../src/screens/TaskScreen';
import LoginScreen from '../src/screens/LoginScreen'; 
import ProfilePage from '../src/screens/ProfilePage';
const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="TaskScreen" component={TaskScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}