import React from 'react';
import { StyleSheet, Image, TouchableHighlight, ScrollView } from 'react-native';
import { Layout, Text, Divider } from '@ui-kitten/components';
import Categoria from './Categoria/Categoria';

const Categorias = () => {
    return (
        <Layout style={style.container}>
            <Text>Categorias:</Text>
            <Layout style={style.categoria}>
                <Categoria />
                <Categoria />
                <Categoria />
                <Categoria />
                <Categoria />
            </Layout>
            <TouchableHighlight activeOpacity={0.6} underlayColor="#a7181a" onPress={() => alert('alo')} style={style.button}>
                <Text style={style.texto}>+ Adicionar Ingrediente</Text>
            </TouchableHighlight>
        </Layout>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
    },
    categoria: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        marginTop: 20,
        backgroundColor: '#BA1B1D',
        padding: 10,
        borderRadius: 30,
    },
    texto: {
        color: '#fff',
        textAlign: 'center',
    }
});

export default Categorias;
