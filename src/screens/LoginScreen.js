import React from 'react';
import { useNavigation } from '@react-navigation/native';
import LoginScreenForm from '../components/LoginScreenForm'; // Adjust the import path if necessary

const LoginScreen = () => {
  const navigation = useNavigation();

  return <LoginScreenForm navigation={navigation} />;
};

export default LoginScreen;