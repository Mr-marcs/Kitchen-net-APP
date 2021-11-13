import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const imagencategoria = {uri: 'https://i2.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food-1024x683.jpg'};

const RecomendacoesCategoria = (props) => {
    return (
        <ImageBackground source={imagencategoria} style={style.container} imageStyle={style.imagemfundo}>
            <View style={style.effects}>
                <Text style={style.titulo}>{props.name}</Text>
            </View>
        </ImageBackground>
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