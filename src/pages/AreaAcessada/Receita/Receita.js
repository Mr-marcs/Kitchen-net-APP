import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Screen from '@components/screen/screen';
import Header from '@components/header/header';
import { Layout, Text } from '@ui-kitten/components';
import RecipeListLine from '@components/RecipeListLine/RecipeListLine';

const Receita = () => {
    return (
        <Layout style={style.container}>
            <Header name="Lista de receitas"/>
            <Layout>
                <ScrollView >
                    <Screen>
                        <RecipeListLine />
                    </Screen>
                </ScrollView>
            </Layout>
        </Layout>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
    },
});

export default Receita;
