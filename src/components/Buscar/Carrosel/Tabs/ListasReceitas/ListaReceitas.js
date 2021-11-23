import React, { useState } from 'react';
import { StyleSheet, ScrollView , Dimensions, StatusBar, TouchableOpacity, Image, View } from 'react-native';
import { Text, Avatar } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/core';
import lul from '@assets/imgs/lul.png'

const ListaReceitas = () => {
    return(
        <View style={style.container}>
            <ListaReceita />
            <ListaReceita />
            <ListaReceita />
        </View>
    );
}

const width = Dimensions.get("window").width;

const ListaReceita = () => {
    return (
        <View style={{marginBottom: 20}}>
            <Image source={lul} style={{width: width/2-25, height: 180}}/>
            <View style={{backgroundColor: '#676767', height: 70, width: width/2-25, justifyContent: 'center'}}>
                <Text style={{color: '#fff', fontSize: 14, textAlign: 'center'}}>Seleção exclusiva dos integrantes do TCC </Text>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
});

export default ListaReceitas;