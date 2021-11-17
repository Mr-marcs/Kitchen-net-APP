import React, {useState} from 'react';
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import { Tab, TabView, Text } from '@ui-kitten/components';
import Pizza from '@assets/svg/pizza.svg';
import Icon2 from 'react-native-vector-icons/AntDesign';

const ReceitaMenu = () => {
    return (
    <View style={style.container}>
        <View style={style.textContainer}>
            <Text style={style.titulo}>Hamburguer de carne artificial louko</Text>
            <View style={style.dificuldade}>
                <Pizza width={38} height={38}/>
                <Text style={style.dificuldadeText}>Fácil</Text>
            </View>
        </View>
        <View style={style.flex}>
            <Icon2 name="hearto" size={24} color="#fff" />
            <Text style={{marginLeft: 10, color: '#fff'}}>10.000</Text>
        </View>
        <Text style={{color: '#fff', fontSize: 20,}}>Sobre:</Text>
        <Text style={{color: '#fff', fontSize: 12, marginBottom: 10,}}>Batata frita crocante e sequinha feita na air fryer / óleo e sal a gosto...</Text>
        
    </View>
    );
}

const style = StyleSheet.create({
    container:{
        padding: 20,
        backgroundColor: '#F24333',
    },
    textContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titulo: {
        flex: 7,
        fontSize: 18,
        color: '#fff',
        flexWrap: 'wrap',
        fontWeight: 'bold',
    },
    dificuldadeText: {
        color: '#fff',
    },
    dificuldade: {
        flex: 1,
        alignItems: 'center',
    },
    flex:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    }
});

export default ReceitaMenu;