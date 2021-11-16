import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';

const Enviar = () => {
    return (
        <Layout style={style.container}>
            <TouchableHighlight style={style.button} activeOpacity={0.6} underlayColor="#a7181a" onPress={() => alert('alo')}>
                <Text style={style.texto}>Enviar</Text>
            </TouchableHighlight>
        </Layout>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        height: 80,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: -10,
        },
        shadowOpacity: 0.8,
        shadowColor: '#000000',
        elevation: 9,
    },
    button: {
        height: 45,
        width: 300,
        borderRadius: 25,
        backgroundColor:'#E24333',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#fff',
    },
    texto: {
        textAlign: 'center',
        color: '#fff'
    },
});

export default Enviar;
