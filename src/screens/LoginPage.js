import axios from 'axios';
import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import FormInput from '../components/FormInput';
import styles from '../styles/LoginPageStyles';

const LoginPage = ({ navigation }) => {
  const [emailCpf, setEmailCpf] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.15.16:4001/api/login', {
        emailCpf,
        password
      });

      console.log('Response:', response.data); // Adicione este log para ver a resposta do backend

      if (response.data.success) {
        navigation.navigate('TaskScreen');
      } else {
        Alert.alert('Erro de Login', 'Credenciais inválidas');
      }
    } catch (error) {
      console.error('Erro:', error); // Adicione este log para ver o erro
      Alert.alert('Erro de Login', 'Ocorreu um erro ao tentar fazer login');
    }
  };

  return (
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
          secureTextEntry
          onChangeText={setPassword}
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
  );
};

export default LoginPage;