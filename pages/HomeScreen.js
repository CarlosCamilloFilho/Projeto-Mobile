import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({ route, navigation }) {
  const { username, password } = route.params || {};
  
  const produto = () => {
          navigation.navigate('Produtos', {
        });

  }
  const perfil = () => {
    navigation.navigate('Perfil', {
  });

}
useEffect(() => {
  console.log('Tela Home Carregada');
}, [username, password]);
  
  return (
    <View style={styles.container}>
      <Text>Seja bem Vindo a Home </Text>
      {username && <Text>Usuário Logado: {username}</Text>}
      <Image source={require('../assets/imghome.png')}/>
      <TouchableOpacity style={styles.button} onPress={produto}>  
                    <Text style={styles.textButton}>Produtos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={perfil}>  
                    <Text style={styles.textButton}>Perfil</Text>
                </TouchableOpacity>

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  username: {
    frontSize: 20,
    marginBottom: 20
  },
  logo: {
    width: 110,
    height: 100,
    marginBottom: 20 // Espaço entre a imagem e os campos de input
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10,
    height: 45,
    width: '50%',
    marginBottom: 20
  },
  textButton: {
    fontSize: 18,
    color: 'white',
  },
});