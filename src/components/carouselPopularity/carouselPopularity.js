import React, { Component } from "react";
import { StyleSheet, Text, View, Animated, TouchableHighlight } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const items = ["Mais curtidas", "Mais recentes", "Em alta"];

const Tab = (props) => {
    return(
        <View style={style.itemContainer}>
            <TouchableHighlight underlayColor="#ddd" activeOpacity={1} onPress={() => alert("lol")} style={style.item} >
                <Text>{props.name}</Text>
            </TouchableHighlight>
        </View>
        
    );
}

const TabComSeparador = i => {
    return(
        <>
            <Tab name={i.props} key={i.props}/>
            <View style={style.separador}></View>
        </>
    );
}

const TabSemSeparador = i => {
    return (
        <Tab name={i.props} key={i.props}/>
    );
}

const CarouselPopularity = () => {
    let contador = 0;
    return (
        <View style={style.container}>
            <ScrollView horizontal>
                {items.map((i) => {
                    contador++;
                    if(contador != 3){
                        return(
                            <TabComSeparador props={i}/>
                        );
                    }
                    else{
                        return(
                            <TabSemSeparador props={i} />
                        );
                    }
                })}
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
