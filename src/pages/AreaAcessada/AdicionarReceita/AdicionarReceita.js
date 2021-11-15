import React from 'react';
import { StyleSheet, Image, TouchableHighlight, ScrollView } from 'react-native';
import Screen from '@components/screen/screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Layout, Text } from '@ui-kitten/components';
import HeaderSemBuscar from '@components/HeaderSemBucar/HeaderSemBuscar';

const AdicionarReceita = () => {
    return (
      <ScrollView  style={style.container}>
        <HeaderSemBuscar name="Adicionar receita"/>
        <Screen>

        </Screen>
      </ScrollView>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
    },
});

export default AdicionarReceita;
