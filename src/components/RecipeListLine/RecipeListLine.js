import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import RecipeList from '@components/RecipeListLine/RecipeList/RecipeList';
import Mais from '@assets/imgs/mais.png';
import Amei from '@assets/imgs/amei.png';
import Minhas from '@assets/imgs/minhas.png';
import Salvos from '@assets/imgs/salvos.png';
import lul from '@assets/imgs/lul.png';

const RecipeListLine = () => {
    return (
        <Layout style={style.container}>
            <RecipeList source={Mais} name="Criar Lista de receitas"/>
            <RecipeList source={Amei} name="Curtidas"/>
            <RecipeList source={Minhas} name="Bookmark"/>
            <RecipeList source={Salvos} name="Minhas receitas"/>
            <RecipeList source={lul} name="Seleção exclusiva dos integrantes do TCC "/>
        </Layout>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
});

export default RecipeListLine;
