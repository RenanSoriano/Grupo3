import react from 'react';
import ProfileScreenStyles from '../components/ProfileScreenStyles';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function ProfileScreen() {
  const [userData, setUserData] = useState({
    profilePicture: "", // Vazio para simular um usuário sem foto
    name: "Nome da Pessoa",
    email: "email@exemplo.com",
    cpf: "000.000.000-00",
    birthDate: "01/01/2000",
    password: "********",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleBackClick = () => {
    console.log("Voltar para a tela anterior");
  };

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