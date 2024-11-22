import React from 'react';
import { useNavigation } from '@react-navigation/native';
import LoginScreenForm from '../components/LoginScreenForm';
import api from '../../api'; // Importe a instância da API

const LoginScreen = () => {
  const navigation = useNavigation();

  return <LoginScreenForm navigation={navigation} />;
};

export default LoginScreen;