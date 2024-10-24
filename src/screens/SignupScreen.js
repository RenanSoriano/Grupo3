import React from 'react';
import { useNavigation } from '@react-navigation/native';
import SignupForm from '../components/SignupForm'; // Adjust the import path if necessary

const SignupScreen = () => {
  const navigation = useNavigation();

  const handleRegister = () => {
    navigation.navigate('LoginPage'); // Corrigir para 'LoginPage'
  };

  return <SignupForm handleRegister={handleRegister} />;
};

export default SignupScreen;