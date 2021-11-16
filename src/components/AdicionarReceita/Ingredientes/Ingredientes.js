import React from 'react';
import { StyleSheet, Image, TouchableHighlight, ScrollView } from 'react-native';
import Screen from '@components/screen/screen';
import { Layout, Text } from '@ui-kitten/components';
import Ingrediente from './Ingrediente/Ingrediente';

const Ingredientes = () => {
    return (
        <Layout style={style.container}>
            <Text>Ingredientes:</Text>
            <Ingrediente />
            <Ingrediente />
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
    button: {
        marginTop: 10,
        backgroundColor: '#BA1B1D',
        padding: 10,
        borderRadius: 30,
    },
    texto: {
        color: '#fff',
        textAlign: 'center',
    }
});

export default Ingredientes;