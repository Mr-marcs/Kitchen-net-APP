import React, {useState} from 'react';
import { StyleSheet, Image, TouchableOpacity, Platform, StatusBar, ScrollView, View, TouchableHighlight } from 'react-native';
import { Layout, Avatar, Text, Input } from '@ui-kitten/components';
import pfp from '@assets/imgs/pfp.jpg';
import Icon2 from 'react-native-vector-icons/Entypo';

const Comentario = () => {
    return (
        <Layout style={style.container}>
            <Avatar source={pfp} size="medium"/>
            <Layout style={{marginLeft: 5}}>
                <Layout style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Layout>
                        <Text style={{fontWeight: 'bold'}}>TCC_Henrique_Yamada</Text>
                        <Text style={{fontSize: 12}}>14 março de 2021</Text>
                    </Layout>
                    <TouchableOpacity>
                        <Icon2 name="dots-three-vertical" size={18} color="#000" />
                    </TouchableOpacity>
                </Layout>
                <Text style={{fontSize: 12, paddingRight: 20, marginTop: 5,}}>
                    Testei aqui em casa e está aprovado! mas lembrando a todos: CUIDADO COM OS 
                    RESPINGOS DE ÓLEO, quase pegou nomeu olho,
                </Text>
            </Layout>
        </Layout>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 20,
        flexDirection: 'row',
    },
});

export default Comentario;