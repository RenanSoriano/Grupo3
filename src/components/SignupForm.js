import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FormInput from '../components/FormInput'; // Adjust the import path if necessary
import styles from '../styles/SignupScreenStyles'; // Adjust the import path if necessary

const SignupForm = ({ handleRegister }) => {
  return (
    <LinearGradient 
      colors={['#d0e1ff', '#9be1c8']}
      style={styles.container}
    >
      <Text style={styles.title}>Criar conta</Text>

      <FormInput placeholder="Nome" />
      <FormInput placeholder="Data de Nascimento" />
      <FormInput placeholder="Email" />
      <FormInput placeholder="CPF" />
      <FormInput placeholder="Senha" secureTextEntry />
      <FormInput placeholder="Confirmar Senha" secureTextEntry />
      
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrar-se</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default SignupForm;