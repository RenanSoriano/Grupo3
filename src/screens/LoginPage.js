import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FormInput from '../components/FormInput';
import styles from '../styles/LoginPageStyles';

const LoginPage = ({ navigation }) => {
  const [emailCpf, setEmailCpf] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // Login logic here
    navigation.navigate('TaskScreen');
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