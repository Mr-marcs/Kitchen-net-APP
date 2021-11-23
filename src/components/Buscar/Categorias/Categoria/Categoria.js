import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Dimensions, View, ImageBackground, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
const imagencategoria = {uri: 'https://i2.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food-1024x683.jpg'};

const Categoria = (props) => {
    const navigation = useNavigation();
    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Categorias", {name: props.name})}>
            <View>
                <ImageBackground source={imagencategoria} style={style.container} imageStyle={style.imagemfundo}>
                    <View style={style.effects}>
                        <Text style={style.titulo}>{props.name}</Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
}

const width = Dimensions.get("window").width;

const style = StyleSheet.create({
    container: {
        width: width/2-15,
        height: 55,
        marginTop: 10,
    },
    effects: {
        borderRadius: 10,
        width: width/2-15,
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

export default Categoria;
