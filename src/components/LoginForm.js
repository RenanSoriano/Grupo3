// src/components/LoginForm.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FormInput from './FormInput';
import styles from '../styles/LoginPageStyles';
import api from '../../api'; // Importe a instância da API

const LoginForm = ({ navigation }) => {
  const [emailCpf, setEmailCpf] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    navigation.navigate('TaskScreen');
  };

  return (
    <LinearGradient
      colors={['#d0e1ff', '#9be1c8']}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <View style={styles.formContainer}>
          <FormInput
            placeholder="Email ou CPF"
            value={emailCpf}
            onChangeText={setEmailCpf}
          />
          
          <FormInput
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.createAccountButton}
            onPress={() => navigation.navigate('SignupScreen')}
          >
            <Text style={styles.createAccountText}>Criar conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default LoginForm;