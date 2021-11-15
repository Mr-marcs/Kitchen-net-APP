import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import RecipeList from '@components/RecipeListLine/RecipeList/RecipeList';
import lul from '@assets/imgs/lul.png';

const ListasReceitas = () => {
    return (
      <Layout style={style.container}>
          <Text style={style.text}>Listas de receitas:</Text>
          <Layout style={style.listas}>
            <RecipeList source={lul} name="Seleção do TCC"/>
            <RecipeList source={lul} name="Seleção do TCC"/>
            <RecipeList source={lul} name="Seleção do TCC"/>
            <RecipeList source={lul} name="Seleção do TCC"/>
          </Layout>
          <Text style={style.verMais}>Ver mais</Text>
      </Layout>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        marginBottom: 100,
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
    verMais: {
        marginTop: 20,
        textAlign: 'center',
    },
    listas: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});

export default ListasReceitas;
