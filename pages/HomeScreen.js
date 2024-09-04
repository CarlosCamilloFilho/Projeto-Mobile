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
      <Text style={styles.welcomeText}>Seja bem Vindo a Home </Text>
      {username && <Text style={styles.welcomeText1}> {username}</Text>}
      <Image style={styles.welcomeText1} source={require('../assets/imghome.png')}/>
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
    padding: 20,
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 5,
  },
  welcomeText1: {
    fontSize: 18,
    marginBottom: 20,
  },
  username: {
    fontSize: 16,
    marginBottom: 20
  },
  logo: {
    width: 150,
    height: 120,
    marginBottom: 20 // Espaço entre a imagem e os campos de input
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff7c00',
    borderRadius: 10,
    padding: 10,
    height: 45,
    width: '65%',
    marginBottom: 15
  },
  textButton: {
    fontSize: 18,
    color: 'white',
  },
});