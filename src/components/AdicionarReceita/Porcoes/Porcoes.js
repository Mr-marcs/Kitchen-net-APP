import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

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
                    <Icon name="minus-circle" color="#F24333" size={24}/>
                </TouchableOpacity>
                <Text style={style.total}>{portions}</Text>
                <TouchableOpacity style={style.minus} onPress={Aumentar}>
                    <Icon name="plus-circle" color="#F24333" size={24}/>
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
    total: {
        fontSize: 28,
    },
});

export default Porcoes;
