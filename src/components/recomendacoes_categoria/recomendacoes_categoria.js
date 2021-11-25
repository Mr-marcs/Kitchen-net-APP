import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import images from '@assets/categorias/1.jpg'
import { useNavigation } from '@react-navigation/core';
const imagencategoria = {uri: 'https://i2.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food-1024x683.jpg'};
import {base_url,image_url} from '@src/config/base_url.config';

const RecomendacoesCategoria = (props) => {
    const [categoryImage ,setCategoryImage] = useState('');
    const navigation = useNavigation();
    
    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Categorias', {name: props.name})}>
            <View>
                <ImageBackground source={{uri:image_url + '/' + props.cod + '.jpg'}} style={style.container} imageStyle={style.imagemfundo}>
                    <View style={style.effects}>
                        <Text style={style.titulo}>{props.name}</Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
}

const style = StyleSheet.create({
    container: {
        height: 55,
        marginTop: 15,
    },
    effects: {
        borderRadius: 10,
        width: '100%',
        height: 55,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        paddingTop: 25,
    },
    imagemfundo: {
        borderRadius: 10,
    },
    titulo: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default RecomendacoesCategoria;
