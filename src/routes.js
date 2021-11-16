import 'react-native-gesture-handler';
import React from 'react';
import Login from '@pages/AreaLogin/login/login';
import Cadastro from '@pages/AreaLogin/cadastro/cadastro';
import bottomTabs from '@components/bottomTabs/bottomTabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdicionarReceita from '@pages/AreaAcessada/AdicionarReceita/AdicionarReceita';
import Configuracoes from '@pages/AreaAcessada/Configuracoes/Configuracoes';
import EditarPerfil from '@pages/AreaAcessada/EditarPerfil/EditarPerfil';
import MudarSenha from '@pages/AreaAcessada/MudarSenha/MudarSenha';
import AdicionarEtapa from '@pages/AreaAcessada/AdicionarEtapa/AdicionarEtapa';


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

const AreaAcessada = () => {
  return(
    <Stack.Navigator initialRouteName="bottomTabs" screenOptions={{headerShown: false}}>
      <Stack.Screen name="bottomTabs" component={bottomTabs}/>
      <Stack.Screen name="AdicionarReceita" component={AdicionarReceita}/>
      <Stack.Screen name="Configuracoes" component={Configuracoes} />
      <Stack.Screen name="EditarPerfil" component={EditarPerfil} />
      <Stack.Screen name="MudarSenha" component={MudarSenha}/>
      <Stack.Screen name="AdicionarEtapa" component={AdicionarEtapa}/>
    </Stack.Navigator>
  );
}

export default Routes;
