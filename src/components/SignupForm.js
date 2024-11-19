// src/components/SignupForm.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/SignupScreenStyles';

const SignupForm = ({ navigation }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    cpf: '',
    birthDate: '',
    password: '',
    confirmPassword: ''
  });

  const handleCpfChange = (text) => {
    const numbers = text.replace(/[^\d]/g, '');
    
    let formatted = '';
    if (numbers.length <= 3) {
      formatted = numbers;
    } else if (numbers.length <= 6) {
      formatted = `${numbers.slice(0, 3)}.${numbers.slice(3)}`;
    } else if (numbers.length <= 9) {
      formatted = `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6)}`;
    } else {
      formatted = `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6, 9)}-${numbers.slice(9, 11)}`;
    }

    if (numbers.length <= 11) {
      setFormData({ ...formData, cpf: formatted });
    }
  };

  const handleBirthDateChange = (text) => {
    const numbers = text.replace(/[^\d]/g, '');
    
    let formatted = '';
    if (numbers.length <= 2) {
      formatted = numbers;
    } else if (numbers.length <= 4) {
      formatted = `${numbers.slice(0, 2)}/${numbers.slice(2)}`;
    } else {
      formatted = `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(4, 8)}`;
    }

    if (formatted.length <= 10) {
      setFormData({ ...formData, birthDate: formatted });
    }
  };

  const handleRegister = () => {
    // Add validation logic here before navigation
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Cadastro</Text>
        
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nome Completo"
            value={formData.fullName}
            onChangeText={(text) => setFormData({ ...formData, fullName: text })}
            placeholderTextColor="#718096"
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#718096"
          />

          <TextInput
            style={styles.input}
            placeholder="CPF (xxx.xxx.xxx-xx)"
            value={formData.cpf}
            onChangeText={handleCpfChange}
            keyboardType="numeric"
            maxLength={14}
            placeholderTextColor="#718096"
          />

          <TextInput
            style={styles.input}
            placeholder="Data de Nascimento (DD/MM/AAAA)"
            value={formData.birthDate}
            onChangeText={handleBirthDateChange}
            keyboardType="numeric"
            maxLength={10}
            placeholderTextColor="#718096"
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={formData.password}
            onChangeText={(text) => setFormData({ ...formData, password: text })}
            secureTextEntry
            placeholderTextColor="#718096"
          />

          <TextInput
            style={styles.input}
            placeholder="Confirmar Senha"
            value={formData.confirmPassword}
            onChangeText={(text) => setFormData({ ...formData, confirmPassword: text })}
            secureTextEntry
            placeholderTextColor="#718096"
          />

          <TouchableOpacity 
            style={styles.registerButton}
            onPress={handleRegister}
          >
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignupForm;