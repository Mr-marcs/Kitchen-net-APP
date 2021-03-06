import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, TouchableHighlight, Touchable } from 'react-native';
import { Layout, Text, Avatar } from '@ui-kitten/components';
import pfp from '@assets/imgs/pfp.jpg';
import Icon from 'react-native-vector-icons/Entypo';
import {base_url} from '@src/config/base_url.config';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/core';

const Header = (props) => {
  
  const [url,setUrl] = useState();
  const [seguindo,setSeguindo] = useState();
  const [color,setColor] = useState();
  
  

  useState(()=>{
      setSeguindo(props.Seguindo);
      (seguindo) ? setColor('#818181') : setColor("#f24333");
  },[])

  

  async function handler(){
    
    const token = await AsyncStorage.getItem('token');

    if(seguindo){
      axios.post(base_url + `/user/unfollow/${props.Key}`,({}),({headers:{token:token}}))
      
      setSeguindo(false)
    }
    else {
      axios.post(base_url + `/user/follow/${props.Key}`,({}),({headers:{token:token}}))
      setSeguindo(true);
    }
    (seguindo) ? setColor('#818181') : setColor("#f24333");
  }
  //console.log(props.src);
  return (
    <Layout style={style.container}>
        <Layout style={style.linha1}>
            <Avatar size="medium" source={{uri:props.src}}/>
            <Layout style={style.areaTexto}>
                <Layout style={style.linha1}>
                    <Text>{props.Autor}</Text>
                    <TouchableOpacity onPress={()=>{handler()}}>
                      <Text style={{'fontWeight': 'bold','color':(seguindo)? "#818181": "#f24333"}}> - {(seguindo)?"seguindo":"seguir"}</Text>
                    </TouchableOpacity>
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
  data: {
    fontSize: 12,
    color: '#818181',
  },
});

export default Header;