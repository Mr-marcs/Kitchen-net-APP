import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Screen from '@components/screen/screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '@components/header/header';
import RecomendacoesCategoria from '@components/recomendacoes_categoria/recomendacoes_categoria';
import CarouselPopularity from '@components/carouselPopularity/carouselPopularity';

const Stack = createNativeStackNavigator();

const Home = () => {
    return (
        <View>
            <Header name="Home"/>
            <Screen>
                <View style={style.content}>
                    <Text style={style.titulo}>Olá, usuário</Text>
                    <Text style={style.subTitulo}>O que gostaria de cozinhar hoje?</Text>
                    <RecomendacoesCategoria name="Sobremesas"/>
                    <RecomendacoesCategoria name="Churrasco"/>
                    <RecomendacoesCategoria name="Italiano"/>
                    <RecomendacoesCategoria name="Árabe"/>
                    <CarouselPopularity />
                </View>
            </Screen>
        </View>
    );
}

const style = StyleSheet.create({
    content: {
        marginTop: 20,
        width: '100%',
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
