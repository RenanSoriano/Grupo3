// src/screens/LoginScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Importa o LinearGradient

const LoginScreen = () => {
  return (
    <LinearGradient 
      colors={['#d0e1ff', '#9be1c8']} // Cores do gradiente
      style={styles.container} // Aplica o gradiente ao container
    >
      <Text style={styles.title}>TASKS</Text>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.buttonText}>Criar conta</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 40,
  },
  loginButton: {
    backgroundColor: '#86c1ff',
    padding: 15,
    width: '80%',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  signupButton: {
    backgroundColor: '#72ff8c',
    padding: 15,
    width: '80%',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#9d2bff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default LoginScreen;