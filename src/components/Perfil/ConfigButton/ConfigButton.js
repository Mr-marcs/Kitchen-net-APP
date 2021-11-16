import { useNavigation } from '@react-navigation/core';
import { Layout, Divider, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ConfigButton = () => {
    const navigation = useNavigation();
    return (
      <Layout style={style.container}>
            <Divider />
            <TouchableHighlight underlayColor="#ddd" onPress={() => navigation.navigate("Configuracoes")} style={style.button}>
                <View style={style.config}>
                    <Icon name="gear" size={30} color="#000"/>
                    <Text style={style.text}>Configurações</Text>
                </View>
            </TouchableHighlight>
            <Divider />
      </Layout>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
    },
    button: {
        padding: 10,
        paddingTop: 15,
        paddingBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 10,
    },
    config: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default ConfigButton;
