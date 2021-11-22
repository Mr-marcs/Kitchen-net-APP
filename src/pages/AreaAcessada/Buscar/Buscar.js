import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { TabView, Tab, Text } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/core';
import Header from '@components/Buscar/Header/Header';
import Categorias from '@components/Buscar/Categorias/Categorias';
import Icon from 'react-native-vector-icons/Ionicons';

const Buscar = () => {
    const navigation = useNavigation();
    const [pesquisa, setPesquisa] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    
    const Tabs = () => {
        return (
            <TabView
                selectedIndex={selectedIndex}
                onSelect={index => setSelectedIndex(index)}
            >
                <Tab title="Receitas Oficiais" style={{paddingLeft: 5, paddingRight: 10}}>
                    <Text>Lol</Text>
                </Tab>
                <Tab title="Receitas da Comunidade">
                    <Text>Lol</Text>
                </Tab>
                <Tab title="Pessoas">
                    <Text>Lol</Text>
                </Tab>
                <Tab title="Listas de Receitas">
                    <Text>Lol</Text>
                </Tab>
            </TabView>
        );
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <View style={style.item1}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{width: 24}}>
                        <Icon name="md-arrow-back" size={24} color="#fff"/>
                    </TouchableOpacity>
                </View>
                <View style={style.item2}>
                    <TextInput style={style.search} value={pesquisa} onChangeText={(nextValue) => {
                        setPesquisa(nextValue);
                    }}/>
                </View>
            </View>
            <Tabs />
            <ScrollView>
                <Categorias />
            </ScrollView>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff'
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    header: {
        width: '100%',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight+15 : 15,
        paddingBottom: 10,
        backgroundColor: '#F24333',
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
    },
    item2: {
        flex: 1,
        marginLeft: 20,
    },
    search: {
        backgroundColor: '#c7362a',
        color: '#fff',
        paddingLeft: 5,
    },
});

export default Buscar;