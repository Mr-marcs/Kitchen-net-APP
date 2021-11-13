import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Indicator = () => {
    return(
        <View 

        />
    );
}

const CarouselPopularity = () => {
    const [CarouselEscolhido, setCarouselEscolhido] = useState(false);
    /*const [active,setActive] = useState("curtidas");
    function curtidas() {
        if("curtidas" === active) {
            return <Text>CU</Text>
        }
    }*/
    return (
        <View style={style.container}>
            <ScrollView style={style.scroll} horizontal>
                <TouchableOpacity style={style.item} >
                    <Text style={style.textcontainer}>Mais curtidas</Text>
                </TouchableOpacity>
                <View style={style.separador}></View>
                <View style={style.item}>
                    <Text style={style.textcontainer}>Mais recentes</Text>
                </View>
                <View style={style.separador}></View>
                <View style={style.item}>
                    <Text style={style.textcontainer}>Em alta</Text>
                </View>
                <Indicator />
            </ScrollView>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        marginTop: 20,
        height: 40,
    },
    scroll:{
        flex: 1,
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
        justifyContent: 'center',
        padding: 12,
        backgroundColor: '#fff'
    },
});

export default CarouselPopularity;
