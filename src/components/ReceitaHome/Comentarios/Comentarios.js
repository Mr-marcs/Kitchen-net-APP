import React, {useState} from 'react';
import { StyleSheet, Image, TouchableOpacity, Platform, StatusBar, ScrollView, View, TouchableHighlight } from 'react-native';
import { Layout, Avatar, Text, Input } from '@ui-kitten/components';
import pfp from '@assets/imgs/pfp.jpg';
import Comentario from './Comentario/Comentario';

const Comentarios = () => {
    const [comentario, setComentario] = useState('');
    return (
        <Layout style={style.container}>
            <Text style={style.titulo}>3 Comentários:</Text>
            <Layout style={style.containerComentario}>
                <Avatar source={pfp} size="large"/>
                <Input
                    placeholder='Place your Text'
                    value={comentario}
                    onChangeText={nextValue => setComentario(nextValue)}
                    style={{flex: 1, marginLeft: 10,}}
                />
            </Layout>
            <Comentario />
            <Comentario />
            <Comentario />
        </Layout>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
    },
    titulo:{
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 20,
    },
    containerComentario: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default Comentarios;