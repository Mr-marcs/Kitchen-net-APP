import React, {useState} from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Toggle, Layout, Text } from '@ui-kitten/components';
import HeaderSemBuscar from '@components/HeaderSemBucar/HeaderSemBuscar';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Receita from '@components/Buscar/Carrosel/Tabs/Receita/Receita';

const Categorias = ({route, navigation}) => {
    const {name} = route.params;
    return (
        <View style={style.container}>
            <HeaderSemBuscar name={"Categoria " + name}/>
            <ScrollView style={{padding: 20}}>
                <Receita />
                <Receita />
                <Receita />
            </ScrollView>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default Categorias;
