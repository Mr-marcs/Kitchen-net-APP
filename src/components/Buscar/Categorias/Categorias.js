import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
const numCategorias = [
    {
        name:"receita1",
        imagem: "https://img.itdg.com.br/tdg/images/recipes/000/309/769/347965/347965_original.jpg?mode=crop&width=360&height=200",
    },
    {
        name:"receita2",
        imagem: "https://t1.rg.ltmcdn.com/pt/images/3/5/1/sobremesa_rapida_e_facil_com_leite_condensado_e_creme_de_leite_9153_600.jpg",
    },
    {
        name:"receita3",
        imagem: "https://s02.video.glbimg.com/x240/9869117.jpg",
    },
];
import Categoria from '@components/Buscar/Categorias/Categoria/Categoria';

const Categorias = () => {
    const navigation = useNavigation();

    return (
        <View style={style.container}>
            <Text style={style.titulo}>Categorias:</Text>
            <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                {
                    numCategorias.map((item, index) => 
                        <Categoria key={index} name={item.name} imagem={item.imagem}/>
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
