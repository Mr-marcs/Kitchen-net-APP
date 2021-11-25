import React, {useEffect, useState} from 'react';
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import { Tab, TabView, Text } from '@ui-kitten/components';
import Pizza from '@assets/svg/pizza.svg';
import Icon2 from 'react-native-vector-icons/AntDesign';

const ReceitaMenu = (props) => {

   const [color, setColor] = useState();

   function GetColor(){
    switch (props.Dificuldade) {
        case "Fácil":
            setColor("#00db3a")
            break;
        case "Médio":
            setColor("#d46a00")
            console.log('a')
            break;
        case "Difícil":
            setColor("#d4006e")
            break;
        }
   }

   useEffect(()=>{
        GetColor();
   },[])

    return (
    <View style={style.container}>
        <View style={style.textContainer}>
            <Text style={style.titulo}>{props.Nome}</Text>
            <View style={style.dificuldade}>
                <Pizza width={38} height={38}/>
                <Text style={style.dificuldadeText}>{props.Dificuldade}</Text>
            </View>
        </View>
        <View style={style.flex}>
            <Icon2 name={(props.Laikado)? "heart" : "hearto" } size={24} color="#fff" />
            <Text style={{marginLeft: 10, color: '#fff'}}>{props.Likes}</Text>
        </View>
        <Text style={{color: '#fff', fontSize: 20,}}>Sobre:</Text>
        <Text style={{color: '#fff', fontSize: 12, marginBottom: 10,}}>{props.Descricao}</Text>
        
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