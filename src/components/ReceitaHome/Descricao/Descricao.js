import React, {useState} from 'react';
import { StyleSheet, Image, TouchableOpacity, Platform, StatusBar, ScrollView, View, TouchableHighlight } from 'react-native';
import { Layout, Tab, TabView, Text } from '@ui-kitten/components';
import Etapa from '@components/AdicionarReceita/Etapas/Etapa/Etapa';

const Descricao = () => {
    return (
        <Layout  style={style.container}>
            <Text style={style.titulo}>Ingredientes:</Text>
            <Text style={style.Ingrediente}>1,5kg Carne moída</Text>
            <Text style={style.Ingrediente}>Óleo de cozinha</Text>
            <Text style={style.titulo}>Etapas:</Text>
            <Etapa />
            <Etapa />
            <Etapa />
        </Layout>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
    },
    titulo:{
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    Ingrediente: {
        marginTop: 10,
    }
});

export default Descricao;