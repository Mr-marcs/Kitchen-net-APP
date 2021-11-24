import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, ImageBackground, TouchableHighlight, Image, View } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import HeaderSemBuscar from '@components/HeaderSemBucar/HeaderSemBuscar';
import lul from '@assets/imgs/lul.png';
import Receita from '@components/Receita/Receita';
import { ScrollView } from 'react-native-gesture-handler';

const ListaReceitas = () => {
    const navigation = useNavigation();
    return (
        <Layout>
            <ScrollView>
                <HeaderSemBuscar name="Lista de receitas"/>
                <ImageBackground source={lul} style={{height: 220}} blurRadius={5}>
                    <View style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', height: 220}}></View>
                </ImageBackground>
                <View style={style.flex}>
                    <ImageBackground source={lul} style={style.mainImage}></ImageBackground>
                </View>
                <View style={{alignItems: 'center'}}>
                    <View style={style.tituloContainer}>
                        <Text style={style.titulo}>Seleção exclusiva dos integrantes do TCC</Text>
                    </View>
                </View>
                <Text style={{textAlign: 'center', marginTop: 10,}}>Criado por: Marcos Paulo TCC</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 20,}}>
                    <Text>5 Seguindo</Text>
                    <Text>Criado em: 03/03/2021</Text>
                </View>
                <View style={{padding: 20,}}>
                    <Receita />
                    <Receita />
                    <Receita />
                    <Receita />
                    <Receita />
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