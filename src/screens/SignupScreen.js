import React from 'react';
import { useNavigation } from '@react-navigation/native';
import SignupForm from '../components/SignupForm';

const SignupScreen = () => {
  const navigation = useNavigation();

  const handleRegister = () => {
    navigation.navigate('TaskScreen');
  };

  return <SignupForm handleRegister={handleRegister} />;
};

export default SignupScreen;