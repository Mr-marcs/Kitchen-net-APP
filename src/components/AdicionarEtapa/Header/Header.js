import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = (props) => {
    const navigation = useNavigation();
    if(props.etapa){
        return (
            <View style={style.header}>
                <View style={style.item1}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={style.highlight}>
                        <Icon name="md-arrow-back" size={24} color="#fff"/>
                    </TouchableOpacity>
                </View>
                <View style={style.item2}>
                    <Text style={style.titulo}>Adicionar Etapa</Text>
                </View>
                <View style={style.item3}>
                    <Icon name="trash" size={24} color="#fff" />
                </View>
            </View>
        );
    }else{
        return (
            <View style={style.header}>
                <View style={style.item1}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={style.highlight}>
                        <Icon name="md-arrow-back" size={24} color="#fff"/>
                    </TouchableOpacity>
                </View>
                <View style={style.item2}>
                    <Text style={style.titulo}>Adicionar Etapa</Text>
                </View>
                <View style={style.item3}></View>
            </View>
        );
    }
}

const style = StyleSheet.create({ 
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
    item1: {
        flexGrow: 1,
    },
    item2: {
        paddingRight: 10,
    },
    item3: {
        flexGrow: 1,
        alignItems: 'flex-end',
    },
});

export default Header;
