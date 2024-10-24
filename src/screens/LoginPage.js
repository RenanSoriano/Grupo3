import React, { useState } from 'react';
import { Alert } from 'react-native';
import LoginForm from '../components/LoginForm'; // Adjust the import path if necessary

function LoginPage({ navigation }) {
  const [emailCpf, setEmailCpf] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Basic validation
    if (!emailCpf || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    console.log('Login clicado');
    // TODO: Implementar a lógica de login aqui (ex.: chamada de API)
    // Após o login bem-sucedido, você pode navegar para uma tela apropriada
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