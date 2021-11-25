import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, ImageBackground, TouchableHighlight, Image, View } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
const imagencategoria = {uri: 'https://i2.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food-1024x683.jpg'};
import Icon2 from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { image_url } from '@src/config/base_url.config';

const Receita = (props) => {
    const navigation = useNavigation();

    return (
      <TouchableOpacity style={style.container} onPress={() => navigation.navigate("ReceitaHome",{id:props.Id,author:props.Author})}>
        <ImageBackground source={{uri:props.Imagem}} style={style.container} imageStyle={style.imagemfundo}>
            <Layout style={style.effects}>
                <Image source={{uri:props.Imagem
                }} style={style.imagem}/>
                <View style={style.areaTexto}>
                    <View>
                        <View style={style.linha1}>
                            <Text style={style.nome}>{props.Nome}</Text>
                        </View>
                        <View style={style.linha2}>
                            <Text style={style.autorReceita}>By: {props.Autor}</Text>
                        </View>
                    </View>
                    <View style={style.infoReceita}>
                        <Text style={style.autorReceita}>{props.Data}</Text>
                        <View style={style.curitdas}>
                            <Icon2 name="hearto" size={14} color="#F24333" />
                            <Text style={style.autorReceita}> {props.like} chefs</Text>
                        </View>
                    </View>
                </View>
            </Layout>
        </ImageBackground>
      </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    container: {
        marginBottom: 15,
        height: 90,
    },
    effects: {
        borderRadius: 10,
        width: '100%',
        height: 90,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        flexDirection: 'row',
    },
    imagemfundo: {
        borderRadius: 10,
    },
    imagem:{
        width: 90,
        height: 90,
        borderRadius: 10,
    },
    areaTexto: {
        padding: 5,
        flex: 1,
        justifyContent: 'space-between',
    },
    autorReceita: {
        color: '#B4B4B4',
        fontSize: 12,
    },
    infoReceita: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nome:{
        color: '#fff',
    },
    linha1: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    curitdas: {
        flexDirection: 'row',
    },
});

export default Receita;
