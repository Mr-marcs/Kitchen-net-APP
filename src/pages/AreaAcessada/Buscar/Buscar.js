import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { Text, Avatar } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Feather';
import Categorias from '@components/Buscar/Categorias/Categorias';
import Tabs from '@components/Buscar/Carrosel/Carrosel';

const Buscar = () => {
    const navigation = useNavigation();
    const [pesquisa, setPesquisa] = useState('');
    const [isPesquisando, setIsPesquisando] = useState(false);
    
    const Pesquisando = () => {
        setIsPesquisando(true)}
    ;

    const Clear = () => {
        setPesquisa('');
        setIsPesquisando(false);
    }

    const ClearButton = () => {
        if(isPesquisando){
            return(
                <TouchableOpacity onPress={() => Clear()} style={{width: 24}}>
                    <Icon2 name="x" size={24} color="#fff"/>
                </TouchableOpacity>
            );
        }
        else{
            return(null);
        }
    }

    const EventArea = () => {
        if(!isPesquisando){
            return(
                <ScrollView>
                    <Categorias />
                </ScrollView>
            );
        }
        else{
            return (
                <Tabs />
            );
        }
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
                    <TextInput 
                        style={style.search} 
                        value={pesquisa} 
                        onChangeText={(nextValue) => {
                            setPesquisa(nextValue);
                        }} 
                        onSubmitEditing={() => Pesquisando()}
                    />
                </View>
                <View style={style.item1}>
                    <ClearButton />
                </View>
            </View>
            <EventArea />
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
        marginRight: 10,
    },
    search: {
        backgroundColor: '#c7362a',
        color: '#fff',
        paddingLeft: 5,
    },
});

export default Buscar;