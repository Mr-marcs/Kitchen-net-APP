import { Layout, Divider, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, Image, TouchableHighlight, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ConfigButton = () => {
    return (
      <Layout style={style.container}>
          <Divider />
          <Layout style={style.button}>
            <Icon name="gear" size={30} color="#000"/>
            <Text style={style.text}>Configurações</Text>
          </Layout>
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
});

export default ConfigButton;
