import api from '../../api';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles/LoginScreenStyles';

const LoginScreenForm = ({ navigation }) => {
  return (
    <LinearGradient 
      colors={['#d0e1ff', '#9be1c8']}
      style={styles.container}
    >
      <Text style={styles.title}>TASKS</Text>
      
      <TouchableOpacity 
        style={styles.loginButton} 
        onPress={() => navigation.navigate('LoginPage')}
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