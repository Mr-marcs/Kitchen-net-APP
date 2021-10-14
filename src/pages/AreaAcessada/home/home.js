import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import Login from '@pages/AreaLogin/login/login';
import Cadastro from '@pages/AreaLogin/cadastro/cadastro';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="AreaLogin" screenOptions={{headerShown: false}}>
            <Stack.Screen name="AreaLogin" component={AreaLogin}/>
            <Stack.Screen name="AreaAcessada" component={AreaAcessada}/>
        </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
