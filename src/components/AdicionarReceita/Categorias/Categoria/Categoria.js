import React from 'react';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';

const Categoria = () => {
    return (
      <Layout style={style.container}>
        <Text style={style.texto}>Bovino</Text>
      </Layout>
    );
}

const style = StyleSheet.create({
    container:{
        marginTop: 10,
        marginRight: 5,
        alignSelf: 'flex-start',
    },
    texto: {
      borderRadius: 20,
      padding: 6,
      paddingLeft: 15,
      paddingRight: 15,
      backgroundColor: '#783044',
      color: '#fff',
    },
});

export default Categoria;