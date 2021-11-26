import React from 'react';
import { StyleSheet, TouchableHighlight, Dimensions, ImageBackground, Image } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import { image_url } from '@src/config/base_url.config';


const RecipeList = (props) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("ListaReceitas", { recipeName : props.name, recipeId: props.Id, image : props.source, authorLogin: props.authorLogin, authorName: props.authorName, date: props.date, playlistId: props.playlistId })} style={style.container}>
            <Image source={{uri:image_url + "/" + props.source}} style={style.containerImage}/>
            <Layout style={style.areaTexto}>
                <Text style={style.titulo}>{props.name}</Text>
            </Layout>
        </TouchableOpacity>
    );
}

const width = Dimensions.get("window").width;

const style = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    containerImage:{
        width: width/2-25,
        height: 180,
    },
    areaTexto: {
        width: width/2-25,
        height: 70,
        backgroundColor: '#676767',
        justifyContent: 'center',
    },
    titulo: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
    },
});

export default RecipeList;