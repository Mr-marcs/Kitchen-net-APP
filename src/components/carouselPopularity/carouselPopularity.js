import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, TouchableHighlight } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const CarouselPopularity = () => {
    return (
        <View style={style.container}>
            <ScrollView horizontal>
                <View style={style.itemContainer}>
                    <TouchableHighlight underlayColor="#ddd" activeOpacity={1} onPress={() => alert("lol")} style={style.item} >
                        <Text>Mais curtidas</Text>
                    </TouchableHighlight>
                </View>
                <View style={style.separador}></View>
                <View style={style.itemContainer}>
                    <TouchableHighlight underlayColor="#ddd" activeOpacity={1} onPress={() => alert("lol")} style={style.item} >
                        <Text>Mais recentes</Text>
                    </TouchableHighlight>
                </View>
                <View style={style.separador}></View>
                <View style={style.itemContainer}>
                    <TouchableHighlight underlayColor="#ddd" activeOpacity={1} onPress={() => alert("lol")} style={style.item} >
                        <Text>Em alta</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        marginTop: 20,
        flexDirection: 'row',
    },
    itemContainer:{
        paddingLeft: 16,
        paddingRight: 16,
    },
    textcontainer: {
        fontSize: 16,
        padding: 5,
    },
    separador:{
        width: 1,
        height: '100%',
        backgroundColor: '#909090',
    },
    item:{
        borderRadius: 20,
        padding: 5,
    },
});

export default CarouselPopularity;
