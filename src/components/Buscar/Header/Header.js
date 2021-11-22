import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Platform, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
    const navigation = useNavigation();
    return (
        <View style={style.header}>
            <View style={style.item1}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{width: 24}}>
                    <Icon name="md-arrow-back" size={24} color="#fff"/>
                </TouchableOpacity>
            </View>
            <View style={style.item2}>
                <SearchInput />
            </View>
        </View>
    );
}

const SearchInput = (props) => {
    return(
        <TextInput 
            {...props}
            style={style.search}
            
        />
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
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight+15 : 15,
        paddingBottom: 10,
        backgroundColor: '#F24333',
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
    },
    item1: {
        
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

export default Header;
