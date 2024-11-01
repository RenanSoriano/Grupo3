import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import styles from '../styles/ProfileSreenStyles.js'

export default function App() {
    return (
      <View style={styles.container}>
        <View style={styles.titulo_imagem}>
        <Text style={styles.TextoPrincipal}>Perfil
        </Text>
        <Image style = {styles.Imagem} source={require('../assets/Imagem_perfil.png')}></Image>
        </View>
        <Text style={styles.linha} numberOfLines={1}>
          _______________________________________________
        </Text>
        <StatusBar style="auto" />
        <Text style={styles.TextoSecundario}>Nome: Yuri
          {'\n'}
        </Text>
        <Text style={styles.TextoSecundario}>E-mail: Yuri@usp.br
        {'\n'}
        </Text>
        <Text style={styles.TextoSecundario}>Data de nascimento: 24/08/2024
        {'\n'}
        </Text>
        <Text style={styles.TextoSecundario}>CPF: 221.xxx.xxx-07
        {'\n'}
        </Text>
        <Text style={styles.TextoSecundario}>Senha: xxxxxx
        {'\n'}
        </Text>
        <View style={styles.simbolos_cima}>
          <Image style={styles.image_dois} source={require('@expo/bunyan/lib/voltar.png')}></Image>
        </View>
        <View style={styles.simbolo_baixo}>
          <Image style={styles.image_dois} source={require('@expo/bunyan/lib/editar.png')}></Image>
        </View>
      </View>
    );
      
      
  }
  