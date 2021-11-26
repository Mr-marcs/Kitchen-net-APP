import React, {useState} from 'react';
import { StyleSheet, Image, TouchableOpacity, Platform, StatusBar, ScrollView, View, TouchableHighlight } from 'react-native';
import { Layout, Tab, TabView, Text } from '@ui-kitten/components';
import Etapa from '@components/AdicionarReceita/Etapas/Etapa/Etapa';
import LoadingComponent from '@components/Loading/Component/LoadingComponent';

const Descricao = (props) => {
    
    return (
        <Layout  style={style.container}>
            <Text style={style.titulo}>Igredientes: </Text>
            {(!props.Igredientes)? <LoadingComponent/>
            :
            props.Igredientes.map(item=>{
                return(
                    <Text style={style.Ingrediente}>•   {item.Name}</Text>
                )
            })
            }        
            <Text style={style.titulo}>Etapas: </Text>
            <Etapa />
        
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
        marginTop: 15,
    },
    Ingrediente: {
        marginTop: 10,
    }
});

export default Descricao;