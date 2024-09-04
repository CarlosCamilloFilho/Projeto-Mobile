import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from '../pages/LoginScreen';
import HomeScreen from '../pages/HomeScreen';
import Produtos from '../pages/Produtos';
import Perfil from '../pages/Perfil';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} /> 
                <Stack.Screen name="Perfil" component={Perfil} />
                <Stack.Screen name="Produtos" component={Produtos} />
                </Stack.Navigator> 
        </NavigationContainer>
    );
} 

//gerenciador de rotas