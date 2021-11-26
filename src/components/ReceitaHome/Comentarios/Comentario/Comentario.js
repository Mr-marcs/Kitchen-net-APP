import React, {useState} from 'react';
import { StyleSheet, Image, TouchableOpacity, Platform, StatusBar, ScrollView, View, TouchableHighlight } from 'react-native';
import { Layout, Avatar, Text, Input } from '@ui-kitten/components';
import pfp from '@assets/imgs/pfp.jpg';
import Icon2 from 'react-native-vector-icons/Entypo';

const Comentario = (props) => {
        console.log(props)
    return (
        <Layout style={style.container}>
            <Avatar source={{uri:props.Imagem}} size="medium"/>
            <Layout style={{marginLeft: 5}}>
                <Layout style={{flexDirection: 'row'}}>
                    <Layout>
                        <Text style={{fontWeight: 'bold'}}>{props.Nome}</Text>
                        <Text style={{fontSize: 12}}>{props.Data}</Text>
                    </Layout>
                    <TouchableOpacity>
                        <Icon2 name="dots-three-vertical" size={18} color="#000" />
                    </TouchableOpacity>
                </Layout>
                <Text style={{fontSize: 12, paddingRight: 20, marginTop: 5,}}>
                    {props.Comentario}
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