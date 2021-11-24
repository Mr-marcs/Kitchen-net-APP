import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Screen from '@components/screen/screen';
import Header from '@components/header/header';
import { Layout, Text } from '@ui-kitten/components';
import RecipeListLine from '@components/RecipeListLine/RecipeListLine';

const Receita = () => {
    return (
        <View style={style.container}>
            <Header name="Lista de receitas"/>
            <ScrollView >
                <Screen>
                    <Layout>
                        <RecipeListLine />
                    </Layout>
                </Screen>
            </ScrollView>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
    },
});

export default Receita;
