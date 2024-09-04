import React  from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Produtos() {

     
    return (
      <View style={styles.container}>
        <Text>Seja bem Vindo à tela de Produtos</Text>
       
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