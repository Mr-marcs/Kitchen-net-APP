import React from 'react';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Layout, Text, Avatar } from '@ui-kitten/components';
import pfp from '@assets/imgs/pfp.jpg';
import Icon from 'react-native-vector-icons/Entypo';

const Header = () => {
  return (
    <Layout style={style.container}>
        <Layout style={style.linha1}>
            <Avatar size="medium" source={pfp}/>
            <Layout style={style.areaTexto}>
                <Layout style={style.linha1}>
                    <Text>Pedro Andrade</Text>
                    <Text style={style.seguir}> - Seguir</Text>
                </Layout>
                <Text style={style.data}>2 Semanas atrás</Text>
            </Layout>
        </Layout>
        <Icon name="dots-three-vertical" size={24} color="#000"/>
    </Layout>
  );
}

const style = StyleSheet.create({
  container:{
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
  linha1: {
    flexDirection: 'row',
  },
  areaTexto: {
      justifyContent: 'space-between',
      marginLeft: 10,
  },
  seguir: {
    fontWeight: 'bold',
    color: '#F24333',
  },
  data: {
    fontSize: 12,
    color: '#818181',
  },
});

export default Header;