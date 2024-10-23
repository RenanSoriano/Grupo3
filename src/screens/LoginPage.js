import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Certifique-se de ter o pacote 'expo-linear-gradient' instalado

export default function LoginPage({ navigation }) {
  const [emailCpf, setEmailCpf] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login clicado');
  };

  return (
    <LinearGradient
    colors={['#d0e1ff', '#9be1c8']}  // Definição do gradiente
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email ou CPF"
            value={emailCpf}
            onChangeText={setEmailCpf}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={password}
            secureTextEntry
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Criar Conta')}>
            <Text style={styles.createAccountText}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    color: '#000',
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',  // Fundo com transparência
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  createAccountText: {
    color: '#000',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
