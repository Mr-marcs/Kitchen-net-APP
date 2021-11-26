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
import ReceitaHome from '@pages/AreaAcessada/ReceitaHome/ReceitaHome';
import ListaReceitas from '@pages/ListaReceitas/ListaReceitas';
import Etapa from '@pages/AreaAcessada/Etapa/Etapa';
import EtapaFinal from '@pages/AreaAcessada/EtapaFInal/EtapaFinal';
import Buscar from '@pages/AreaAcessada/Buscar/Buscar';
import Categorias from '@pages/AreaAcessada/Categorias/Categorias';
import EsqueceuSenha from '@pages/AreaLogin/EsqueceuSenha/EsqueceuSenha';
import Confirmacao from '@pages/AreaLogin/Confirmacao/Confirmacao';
import ReceitaOptions from '@pages/AreaAcessada/ReceitaOptions/ReceitaOptions';
import AdicionarEmLista from '@pages/AreaAcessada/AdicionarEmLista/AdicionarEmLista';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="AreaLogin" screenOptions={{headerShown: false}}>
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
      <Stack.Screen name="EsqueceuSenha" component={EsqueceuSenha}/>
      <Stack.Screen name="Confirmacao" component={Confirmacao}/>
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
      <Stack.Screen name="ReceitaHome" component={ReceitaHome}/>
      <Stack.Screen name="ListaReceitas" component={ListaReceitas}/>
      <Stack.Screen name="Etapa" component={Etapa}/>
      <Stack.Screen name="EtapaFinal" component={EtapaFinal}/>
      <Stack.Screen name="Buscar" component={Buscar}/>
      <Stack.Screen name="Categorias" component={Categorias}/>
      <Stack.Screen name="ReceitaOptions" component={ReceitaOptions}/>
      <Stack.Screen name="AdicionarEmLista" component={AdicionarEmLista}/>
    </Stack.Navigator>
  );
}

export default Routes;