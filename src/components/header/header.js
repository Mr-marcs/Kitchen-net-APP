import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = (props) => {
    const navigation = useNavigation();
    return (
        <View style={style.container}>
            <View style={style.header}>
                <View style={style.item1}></View>
                <View style={style.item2}>
                    <Text style={style.titulo}>{props.name}</Text>
                </View>
                <View style={style.item3}>
                    <TouchableOpacity onPress={() => navigation.navigate("Buscar")}>
                        <Icon name="search" size={24} color="#fff"/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    header: {
        width: '100%',
        paddingTop: 25,
        paddingBottom: 10,
        backgroundColor: '#F24333',
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
    },
    item1: {
        flexGrow: 1,
    },
    item2: {
        paddingLeft: 25,
    },
    item3: {
        flexGrow: 1,
        alignItems: 'flex-end',
    },
});

export default Header;
