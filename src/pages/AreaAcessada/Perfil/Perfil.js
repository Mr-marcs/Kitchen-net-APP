import React from 'react';
import { StyleSheet, Image, TouchableHighlight, ScrollView } from 'react-native';
import Screen from '@components/screen/screen';
import Header from '@components/header/header';
import PersonalInfo from '@components/Perfil/PersonalInfo/PersonalInfo';
import ProgressBar from '@components/Perfil/Progress/ProgressBar';
import ConfigButton from '@components/Perfil/ConfigButton/ConfigButton';
import ReceitaCriada from '@components/Perfil/ReceitasCriadas/ReceitasCriadas';
import ListasReceitas from '@components/Perfil/ListasReceitas/ListasREceitas';

const Perfil = () => {
    return (
      <ScrollView  style={style.container}>
        <Header name="Perfil"/>
        <Screen>
            <PersonalInfo />
            <ProgressBar />
            <ConfigButton />
            <ReceitaCriada />
            <ListasReceitas />
        </Screen>
      </ScrollView>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
    },
});

export default Perfil;
