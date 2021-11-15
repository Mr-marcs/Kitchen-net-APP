import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import Receita from '@components/Receita/Receita';

const ReceitaCriada = () => {
    return (
      <Layout style={style.container}>
          <Text style={style.text}>Receitas Criadas:</Text>
          <Receita />
          <Receita />
          <Receita />
          <Text style={style.verMais}>Ver mais</Text>
      </Layout>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
    verMais: {
        textAlign: 'center',
    },
});

export default ReceitaCriada;
