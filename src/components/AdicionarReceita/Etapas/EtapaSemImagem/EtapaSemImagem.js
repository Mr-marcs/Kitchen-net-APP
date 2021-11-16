import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';

const EtapaSemImagem = () => {
    return (
      <Layout style={style.container}>
          <Text style={style.texto}>1</Text>
          <View style={style.containerTexto}>
            <Text style={style.texto}>Primeiro corte os igredientes exempadsdadsdasd</Text>
          </View>
      </Layout>
    );
}

const style = StyleSheet.create({
    container:{
        marginTop: 10,
        flex: 1,
        height: 80,
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 10,
    },
    image: {
        width: 70,
        height: 70,
    },
    texto: {
        color: '#fff',
        fontSize: 14,
    },
    containerTexto: {
        flexWrap: 'wrap',
    },
});

export default EtapaSemImagem;
