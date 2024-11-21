import React, { useState } from 'react';
import { Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles/LoginScreenStyles';
import api from '../services/api'; 

const LoginScreenForm = ({ navigation }) => {
  const [identifier, setIdentifier] = useState(''); 
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      
      const payload = {
        identifier, 
        password,
      };

      const response = await api.post('/auth/login', payload);
      const { token } = response.data;
      console.log('Login bem-sucedido:', token);

      navigation.navigate('TaskPage'); 
    } catch (error) {
      console.error('Erro ao fazer login:', error.response?.data || error.message);
      Alert.alert('Erro', 'Credenciais inválidas, tente novamente.');
    }
  };

  return (
    <LinearGradient 
      colors={['#d0e1ff', '#9be1c8']}
      style={styles.container}
    >
      <Text style={styles.title}>TASKS</Text>

      <TextInput
        style={styles.input}
        placeholder="Email ou CPF"
        value={identifier}
        onChangeText={setIdentifier}
        keyboardType="default" 
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity 
        style={styles.loginButton} 
        onPress={login}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.signupButton} 
        onPress={() => navigation.navigate('SignupScreen')}
      >
        <Text style={styles.buttonText}>Criar conta</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default LoginScreenForm;
