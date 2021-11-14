import React from 'react';
import { StyleSheet, Image, TouchableHighlight, ScrollView } from 'react-native';
import Screen from '@components/screen/screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '@components/header/header';
import RecomendacoesCategoria from '@components/recomendacoes_categoria/recomendacoes_categoria';
import CarouselPopularity from '@components/carouselPopularity/carouselPopularity';
import { Layout, Text } from '@ui-kitten/components';

const Stack = createNativeStackNavigator();

const Home = () => {
    return (
      <ScrollView  style={style.container}>
        <Header name="Home"/>
        <Screen>
            <Layout style={style.content}>
                <Text style={style.titulo}>Olá, usuário</Text>
                <Text style={style.subTitulo}>O que gostaria de cozinhar hoje?</Text>
                <RecomendacoesCategoria name="Sobremesas"/>
                <RecomendacoesCategoria name="Churrasco"/>
                <RecomendacoesCategoria name="Italiano"/>
                <RecomendacoesCategoria name="Árabe"/>
                <CarouselPopularity />
            </Layout>
        </Screen>
      </ScrollView>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
    },
    content: {
        marginTop: 20,
        flex: 1,
    },
    titulo: {
        fontWeight: "bold",
        fontSize: 40,
    },
    subTitulo: {
        fontSize: 20,
        fontFamily: 'Oswald_400Regular',
    },
});

export default Home;
