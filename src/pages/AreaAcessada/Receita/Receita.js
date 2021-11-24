import React from 'react';
import { StyleSheet, TouchableHighlight, ScrollView } from 'react-native';
import Screen from '@components/screen/screen';
import Header from '@components/header/header';
import { Layout, Text } from '@ui-kitten/components';
import RecipeListLine from '@components/RecipeListLine/RecipeListLine';

const Receita = () => {
    return (
        <ScrollView ScrollView  style={style.container}>
            <Header name="Lista de receitas"/>
            <Screen>
                <Layout>
                    <RecipeListLine />
                </Layout>
            </Screen>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
    },
});

export default Receita;
