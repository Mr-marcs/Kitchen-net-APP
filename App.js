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
  let [fontsLoaded] = useFonts({
    Oswald_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  else{
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AreaLogin" screenOptions={{headerShown: false}}>
          <Stack.Screen name="AreaLogin" component={AreaLogin}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const AreaLogin = () => {
  return(
    <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Cadastro" component={Cadastro}/>
    </Stack.Navigator>
  );
}

const AreaAcessada = () => {
  return(
    <Text>a</Text>
  );
}

export default App;
