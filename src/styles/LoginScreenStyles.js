// src/styles/LoginScreenStyles.js
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: 80, // Aumentado o espaçamento
    flex: 0.4, // Ajuda a posicionar no topo
    justifyContent: 'center',
  },

  logo: {
    width: width * 0.4,
    height: width * 0.4,
    marginBottom: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 100, // Aumentado
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 60, // Aumentado
    textAlign: 'center',
  },

  formContainer: {
    width: '100%',
    flex: 0.6, // Ajuda a organizar o espaço
    justifyContent: 'center',
  },

  inputContainer: {
    width: '100%',
    marginBottom: 40, // Aumentado o espaçamento entre inputs e botões
  },

  buttonContainer: {
    width: '100%',
    marginTop: 20, // Espaço adicional acima dos botões
  },

  loginButton: {
    backgroundColor: '#4B9EFF',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20, // Aumentado
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  signupButton: {
    backgroundColor: '#4B9EFF',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#4B9EFF',
  },

  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  signupButtonText: {
    color: '#4B9EFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  // ... resto dos estilos permanecem iguais
});