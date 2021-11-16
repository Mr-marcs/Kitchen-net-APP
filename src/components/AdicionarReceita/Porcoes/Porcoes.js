import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Porcoes = () => {
    const [portions, setPortions] = useState(1);
    const Aumentar = () => {
        setPortions(portions + 1);
    }
    const Diminuir = () => {
        if(portions == 1)
            return;
        
        setPortions(portions - 1);
    }
    return (
        <Layout style={style.container}>
            <Text>Porções:</Text>
            <Layout style={style.containerPortions}>
                <TouchableOpacity style={style.minus} onPress={Diminuir}>
                    <Text style={style.button1}>-</Text>
                </TouchableOpacity>
                <Text style={style.total}>{portions}</Text>
                <TouchableOpacity style={style.minus} onPress={Aumentar}>
                    <Text style={style.button2}>+</Text>
                </TouchableOpacity>
            </Layout>
        </Layout>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 20,
        marginBottom: 20,
    },
    containerPortions: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    minus: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#000',
    },
    button1: {
        paddingBottom: 5,
        fontSize: 40,
    },
    button2: {
        paddingBottom: 3,
        fontSize: 30,
    },
    total: {
        fontSize: 28,
    },
});

export default Porcoes;
