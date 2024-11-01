import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 100,
      backgroundColor: 'white',
    },
    segundaCaixa : {
      flex: 50,
      alignItems: 'flex-start',
    },
    TextoPrincipal : {
      fontSize: 40,
      marginVertical: '20%',
      marginHorizontal: '10%',
    },
    TextoSecundario: {
      fontSize: 20,
      alignItems: 'flex-start',
      marginHorizontal: '10%',
    },
    Imagem: {
     width: 150,
     height: 150,
    },
    titulo_imagem: {
      alignItems: 'center',
    },
    simbolos_cima: {
      position: 'absolute',
      top: 30,
      left: 10,
      zIndex: 1,
    },
    linha: {
      marginHorizontal: '10%',
    },
    image_dois: {
      width: 40,
      height: 40,
    },
    simbolo_baixo: {
      position: 'absolute',
      bottom: 20,
      right: 20,
    },
  });
  