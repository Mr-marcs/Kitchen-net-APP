import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Receita from '@components/Buscar/Carrosel/Tabs/Receita/Receita';

const ReceitasComunidade = () => {
    return (
        <ScrollView style={style.container}>
            <Receita />
        </ScrollView>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
    },
});

export default ReceitasComunidade;