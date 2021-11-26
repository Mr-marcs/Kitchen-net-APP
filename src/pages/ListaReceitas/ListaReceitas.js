import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, ImageBackground, TouchableHighlight, Image, View } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import HeaderSemBuscar from '@components/HeaderSemBucar/HeaderSemBuscar';
import lul from '@assets/imgs/lul.png';
import Receita from '@components/Receita/Receita';
import { ScrollView } from 'react-native-gesture-handler';
import { base_url, image_url } from '@src/config/base_url.config';
import noImage from '@assets/imgs/noimage.jpg';

const ListaReceitas = ({route}) => {
    const navigation = useNavigation();
    const {image, recipeId, recipeName, autor } = route.params;
    
    return (
        <Layout>
            <HeaderSemBuscar name="Lista de receitas"/>
            <ScrollView>
                <ImageBackground source={noImage} style={{height: 220}} blurRadius={5}>
                    <View style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', height: 220}}></View>
                </ImageBackground>
                <View style={style.flex}>
                    <ImageBackground source={noImage} style={style.mainImage}></ImageBackground>
                </View>
                <View style={{alignItems: 'center'}}>
                    <View style={style.tituloContainer}>
                        <Text style={style.titulo}>{recipeName}</Text>
                    </View>
                </View>
                <Text style={{textAlign: 'center', marginTop: 10,}}>Criado por: {autor}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'center', padding: 20,}}>
                    <Text style={{fontSize: 12,}}>Criado em: 03/03/2021</Text>
                </View>
                <View style={{padding: 20, paddingBottom: 120 }}>
                    {/*
                        receitas.map(item => {
                            return(
                                <Receita key={item.Id} Imagem={item.thumbnail} Nome={item.Name} RecipeAuthor={item.Author} like={item.Likes} Date={item.Created_At} />
                            );
                        })
                    */}
                </View>
            </ScrollView>
        </Layout>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainImage: {
        width: 180,
        height: 180,
        position: 'absolute',
        top: -120,
    },
    flex: {
        alignItems: 'center',
    },
    titulo: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 70,
    },
    tituloContainer: {
        width: 300,
    },
});

export default ListaReceitas;