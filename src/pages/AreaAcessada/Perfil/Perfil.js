import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Screen from '@components/screen/screen';
import Header from '@components/header/header';
import PersonalInfo from '@components/Perfil/PersonalInfo/PersonalInfo';
import ProgressBar from '@components/Perfil/Progress/ProgressBar';
import ConfigButton from '@components/Perfil/ConfigButton/ConfigButton';
import ReceitaCriada from '@components/Perfil/ReceitasCriadas/ReceitasCriadas';
import ListasReceitas from '@components/Perfil/ListasReceitas/ListasREceitas';

const Perfil = () => {
    return (
      <View style={style.container}>
        <Header name="Perfil"/>
        <ScrollView>
          <Screen>
              <PersonalInfo />
              <ProgressBar />
              <ConfigButton />
              <ReceitaCriada />
              <ListasReceitas />
          </Screen>
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
