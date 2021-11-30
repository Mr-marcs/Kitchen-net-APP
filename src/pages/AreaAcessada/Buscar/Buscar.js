import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { Text, Avatar } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Feather';
import Categorias from '@components/Buscar/Categorias/Categorias';
import Tabs from '@components/Buscar/Carrosel/Carrosel';

const Buscar = () => {
    const navigation = useNavigation();
    const [pesquisa, setPesquisa] = useState('')
    /*
    const [isCategoria, setIsCategoria] = useState(true);
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if(pesquisa.length > 0){
                setIsCategoria(false)
            }
            else{
                setIsCategoria(true)
            }
        }, 1000)
        return () => clearTimeout(delayDebounceFn)
    }, [pesquisa]);

    function EventArea() {
        if(!isCategoria){
            return(
                <Tabs />
            );
        }
        else{
            return (
                <ScrollView>
                    <Categorias />
                </ScrollView>
            );
        }
    }
    */
   const pesquisar = (props) => {
       setPesquisa(props);
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
                        autoFocus
                        style={style.search} 
                        value={pesquisa} 
                        onChangeText={pesquisar} 
                    />
                </View>
            </View>
            <Text>{pesquisa}</Text>
            {/*<EventArea />*/}
            <Tabs/>
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