import React  from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Produtos() {

     
    return (
      <View style={styles.container}>
        <Text>Esta é a sua tela de Produtos</Text>
        
        <Text>Faça sua escolha</Text>
       
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