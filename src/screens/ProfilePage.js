import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import styles from '../styles/ProfileScreenStyles';
import api from '../api'; // Cliente Axios configurado

export default function ProfileScreen({ navigation }) {
  const [userData, setUserData] = useState({
    profilePicture: "",
    name: "",
    email: "",
    cpf: "",
    birthDate: "",
    password: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Buscar dados do usuário ao carregar a tela
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.get('/user'); // Substituir '/user' pela rota correta do back-end
        setUserData(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
        Alert.alert("Erro", "Não foi possível carregar os dados do usuário.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // Salvar dados no back-end
  const handleSaveClick = async () => {
    setIsLoading(true);

    try {
      const response = await api.put('/user', userData); // Substituir '/user' pela rota correta do back-end
      setUserData(response.data);
      Alert.alert("Sucesso", "Dados atualizados com sucesso!");
      setIsEditing(false);
    } catch (error) {
      console.error("Erro ao salvar dados do usuário:", error);
      Alert.alert("Erro", "Não foi possível salvar os dados. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleBackClick = () => {
    navigation.goBack();
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackClick} style={styles.backButton}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Perfil</Text>
      </View>

      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: userData.profilePicture || "https://via.placeholder.com/150/000000/FFFFFF/?text=Foto+Padrão",
          }}
          style={styles.profilePicture}
        />
        
        <View style={styles.separator} />

        {isEditing ? (
          <>
            <TextInput
              style={styles.input}
              value={userData.name}
              onChangeText={(text) => setUserData({ ...userData, name: text })}
              placeholder="Nome"
            />
            <TextInput
              style={styles.input}
              value={userData.email}
              onChangeText={(text) => setUserData({ ...userData, email: text })}
              placeholder="Email"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              value={userData.cpf}
              onChangeText={(text) => setUserData({ ...userData, cpf: text })}
              placeholder="CPF"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              value={userData.birthDate}
              onChangeText={(text) => setUserData({ ...userData, birthDate: text })}
              placeholder="Data de Nascimento"
            />
            <TextInput
              style={styles.input}
              value={userData.password}
              onChangeText={(text) => setUserData({ ...userData, password: text })}
              placeholder="Senha"
              secureTextEntry
            />
          </>
        ) : (
          <>
            <Text style={styles.profileText}>Nome: {userData.name}</Text>
            <Text style={styles.profileText}>Email: {userData.email}</Text>
            <Text style={styles.profileText}>CPF: {userData.cpf}</Text>
            <Text style={styles.profileText}>Data de Nascimento: {userData.birthDate}</Text>
            <Text style={styles.profileText}>Senha: {userData.password}</Text>
          </>
        )}
      </View>

      <TouchableOpacity onPress={isEditing ? handleSaveClick : handleEditClick} style={styles.editButton}>
        <Text style={styles.buttonText}>{isEditing ? "Salvar" : "Editar"}</Text>
      </TouchableOpacity>
    </View>
  );
}
