import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Layout, Text, Avatar } from '@ui-kitten/components';
import pfp from '@assets/imgs/pfp.jpg';
import Icon from 'react-native-vector-icons/Entypo';
import base_url from '@src/config/base_url.config';
import axios from 'axios';

const Header = (props) => {
  
  const [url,setUrl] = useState();
  console.log(props.Id)
  return (
    <Layout style={style.container}>
        <Layout style={style.linha1}>
            <Avatar size="medium" source={{uri:props.src}}/>
            <Layout style={style.areaTexto}>
                <Layout style={style.linha1}>
                    <Text>{props.Autor}</Text>
                    <Text style={style.seguir}> - Seguir</Text>
                </Layout>
                <Text style={style.data}>{props.Data}</Text>
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