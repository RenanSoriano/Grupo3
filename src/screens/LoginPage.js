import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import FormInput from '../components/FormInput';
import styles from '../styles/LoginPageStyles';
import api from '../../api'; // Importe a instância da API

const LoginPage = ({ navigation }) => {
  const [emailOrCpf, setEmailOrCpf] = React.useState('');
  const [password, setPassword] = React.useState('');
}

  const handleLogin = async (event) => {
    event.preventDefault();
    const Data = {emailOrCpf, password};
    try {
      const response = await api.post('/signin', Data);
  
      if (response.status === 200) {
        // Sucesso no envio dos dados
        console.log('Dados enviados com sucesso:', response.data);
        // Navegar para outra tela ou mostrar uma mensagem de sucesso
        navigation.navigate('TaskScreen');
      } else {
        // Tratar erro de resposta
        console.error('Erro ao enviar dados:', response.status, response.data);
      }
    } catch (error) {
      // Tratar erro de requisição
      console.error('Erro ao enviar dados:', error);
    }
  };
  
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.formContainer}>
        <FormInput
          placeholder="Email ou CPF"
          value={emailOrCpf}
          onChangeText={setEmailOrCpf}
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