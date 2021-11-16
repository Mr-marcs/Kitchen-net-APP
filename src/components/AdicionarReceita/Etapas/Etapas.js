import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import Etapa from './Etapa/Etapa';
import EtapaSemImagem from './EtapaSemImagem/EtapaSemImagem';

const Etapas = () => {
    return (
      <Layout style={style.container}>
        <Text>Etapas:</Text>
        <Etapa />
        <EtapaSemImagem />
        <TouchableHighlight activeOpacity={0.6} underlayColor="#a7181a" onPress={() => alert('alo')} style={style.button}>
            <Text style={style.texto}>+ Adicionar Etapa</Text>
        </TouchableHighlight>
      </Layout>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 20,
        marginBottom: 30,
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

export default Etapas;
