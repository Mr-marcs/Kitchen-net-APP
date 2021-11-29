import React, { useState } from 'react';
import { StyleSheet, ScrollView , Dimensions, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { Text, Avatar } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/core';
import Receita from '@components/Buscar/Carrosel/Tabs/Receita/Receita';

const ReceitasOFiciais = () => {
    return (
        <ScrollView style={style.container}>
            <Receita verified/>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
    },
});

export default ReceitasOFiciais;