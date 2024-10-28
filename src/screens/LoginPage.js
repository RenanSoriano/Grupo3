import React, { useState } from 'react';
import { Alert } from 'react-native';
import LoginForm from '../components/LoginForm';

function LoginPage({ navigation }) {
  const [emailCpf, setEmailCpf] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!emailCpf || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    console.log('Login clicado');
    navigation.navigate('TaskScreen');
  };

  return (
    <LoginForm
      emailCpf={emailCpf}
      setEmailCpf={setEmailCpf}
      password={password}
      setPassword={setPassword}
      handleLogin={handleLogin}
      navigation={navigation}
    />
  );
}

export default LoginPage;