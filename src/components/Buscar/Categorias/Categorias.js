import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
const numCategorias = [
    {
        "name":"receita1",
    },
    {
        "name":"receita2",
    },
    {
        "name":"receita3",
    },
];
import Categoria from '@components/Buscar/Categorias/Categoria/Categoria';

const Categorias = () => {
    const navigation = useNavigation();

    const _categorias = () => {

    }

    return (
        <View style={style.container}>
            <Text style={style.titulo}>Categorias:</Text>
            <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                {
                    numCategorias.map((item, index) => 
                        <Categoria key={index} name={item.name}/>
                    )
                }
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        padding: 10,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
});

export default Categorias;
