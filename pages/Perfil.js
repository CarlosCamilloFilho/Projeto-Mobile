import React  from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Perfil() {

     
    return (
      <View style={styles.container}>
        <Text>Seja bem Vindo à tela de Perfil</Text>
       
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });