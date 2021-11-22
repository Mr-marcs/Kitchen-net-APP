import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, StatusBar, Platform } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/core';

const Header = () => {
    const navigation = useNavigation();
  return (
    <View>
        <View style={style.header}>
            <View style={style.item1}>
                <TouchableOpacity onPress={() => navigation.navigate('bottomTabs')} style={style.highlight}>
                    <Icon name="left" size={24} color="#000"/>
                    <Text>Home</Text>
                </TouchableOpacity>
            </View>
            <View style={style.item2}></View>
            <View style={style.item3}></View>
        </View>
    </View>
  );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
    },
    header: {
        width: '100%',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight+15 : 15,
        paddingBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
    },
    highlight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    item1: {
        flexGrow: 1,
    },
    item2: {
        flex: 5,
        paddingRight: 20,
        justifyContent: 'center',
    },
    item3: {
        flexGrow: 1,
        alignItems: 'flex-end',
    },
});

export default Header;