import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, TouchableHighlight, ScrollView, Text, View } from 'react-native';
import Screen from '@components/screen/screen';
import Header from '@components/header/header';
import PersonalInfo from '@components/Perfil/PersonalInfo/PersonalInfo';
import ProgressBar from '@components/Perfil/Progress/ProgressBar';
import ConfigButton from '@components/Perfil/ConfigButton/ConfigButton';
import ReceitaCriada from '@components/Perfil/ReceitasCriadas/ReceitasCriadas';
import ListasReceitas from '@components/Perfil/ListasReceitas/ListasREceitas';
import axios from 'axios';
import { base_url } from '@src/config/base_url.config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingComponent from '@components/Loading/Component/LoadingComponent';
import { useFocusEffect } from '@react-navigation/core';

const Perfil = ({navigation}) => {
  const [user,setUser] = useState();

  async function GetUserInfo(){

    const token = await AsyncStorage.getItem('token');
    
    const result = await axios.get(base_url + '/user',{headers:{
      token: token
    }})
    setUser(result.data.result.user)
  
    
  }
  
  useFocusEffect(()=>{
    GetUserInfo();
  })

  return (
    <View style={style.container}>
      <Header name="Perfil"/>
      <ScrollView>
        {(!user)? <LoadingComponent/>
        :
        <Screen>
            <PersonalInfo Id={user.login} Nome={user.name} Seguidores={user.followers} Seguindo={user.following} />
            <ProgressBar Level={user.current_level} Atual={user.level.current_xp} Proximo={user.level.xp_to_next_level}/>
            <ConfigButton />
            <ReceitaCriada />
            <ListasReceitas Login={user.login} />
        </Screen>
        }
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
    },
});

export default Perfil;