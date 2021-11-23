import React, { useState } from 'react';
import { StyleSheet, ScrollView , Dimensions, StatusBar, TouchableOpacity, TextInput, View } from 'react-native';
import { Text, Avatar } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/core';
import pfp from '@assets/imgs/pfp.jpg';

const Pessoas = () => {
    return (
        <ScrollView style={style.container}>
            <Pessoa />
            <Pessoa />
            <Pessoa />
            <Pessoa />
        </ScrollView>
    );
}

const Pessoa = () => {
    const [seguindo, setSeguindo] = useState(false);
    const buttonSeguindoClick = () => {
        setSeguindo(!seguindo);
    }

    const ButtonSeguindo = () => {
        if(seguindo){
            return (
                <View style={{backgroundColor: '#F24333', borderColor: '#F24333', borderWidth: 1, borderRadius: 10, width: 80, height: 35, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{ color:'#fff'}}>Seguindo</Text>
                </View>
            );
        }
        else{
            return(
                <View style={{backgroundColor: '#fff', borderColor: '#F24333', borderWidth: 1, borderRadius: 10, width: 80, height: 35, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>Seguir</Text>
                </View>
            );
        }
    }

    return(
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10,}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Avatar size="large" source={pfp}/>
                <Text style={{fontSize: 16, marginLeft: 10}}>TCC_Lucca_de_Castro</Text>
            </View>
            <TouchableOpacity onPress={() => buttonSeguindoClick()}>
                <ButtonSeguindo />
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
    },
});

export default Pessoas;