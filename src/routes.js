import 'react-native-gesture-handler';
import React from 'react';
import Login from '@pages/AreaLogin/login/login';
import Cadastro from '@pages/AreaLogin/cadastro/cadastro';
import AreaAcessada from '@components/bottomTabs/bottomTabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="AreaAcessada" screenOptions={{headerShown: false}}>
            <Stack.Screen name="AreaLogin" component={AreaLogin}/>
            <Stack.Screen name="AreaAcessada" component={AreaAcessada}/>
        </Stack.Navigator>
        </NavigationContainer>
    );
}

const AreaLogin = () => {
  return(
    <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Cadastro" component={Cadastro}/>
    </Stack.Navigator>
  );
}

export default Routes;
