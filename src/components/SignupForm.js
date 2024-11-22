// src/components/SignupForm.js
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/SignupScreenStyles';
import axios from 'axios';
import api from '../../api'; // Importe a instância da API

const SignupForm = () => {

  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cpf: '',
    birthDate: '',
    password: ''
    
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, cpf, birthDate, password} = formData;
    const dataToSend = { name, email, cpf, password };
    try {
      const response = await api.post('/signup', dataToSend);
      if (response.status === 200) {
        // Sucesso no envio dos dados
        console.log('Dados enviados com sucesso:', response.data);
        // Navegar para outra tela ou mostrar uma mensagem de sucesso
        navigation.navigate('LoginPage');
      } else {
        // Tratar erro de resposta
        console.error('Erro ao enviar dados:', response.status, response.data);
      }
    } catch (error) {
      // Tratar erro de requisição
      console.error('Erro ao enviar dados:', error);
    }
  };

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

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Cadastro</Text>
        
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nome Completo"
            value={formData.name}
            onChangeText={(text) => setFormData({ ...formData, name: text })}
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

          

          <TouchableOpacity 
            style={styles.registerButton}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignupForm;