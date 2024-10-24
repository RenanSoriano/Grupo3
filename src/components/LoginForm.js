import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FormInput from '../components/FormInput'; // Adjust the import path if necessary
import styles from '../styles/LoginPageStyles'; // Adjust the import path if necessary

const LoginForm = ({ emailCpf, setEmailCpf, password, setPassword, handleLogin, navigation }) => {
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
            secureTextEntry
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.createAccountText}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default LoginForm;