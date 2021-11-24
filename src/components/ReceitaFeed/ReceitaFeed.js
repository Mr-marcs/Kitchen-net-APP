import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import Header from '@components/ReceitaFeed/header/header'
import ImageRecipe from './imageRecipe/ImageRecipe';
import RecipeInfo from './RecipeInfo/RecipeInfo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import base_urlConfig from '@src/config/base_url.config';
import {base_url,image_url} from '@src/config/base_url.config';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ReceitaFeed = (props) => {
  const navigation = useNavigation();
  const id = props.Key;

  const [imageF,setImage] = useState();

  async function GetImage(){
    console.log("Aqui foi")
    const token = await AsyncStorage.getItem('token');
    const response = await axios.get(base_url + `/users/profiles/${id}`,{headers:{token:token}});
    
    const image = response.data.result.user.image_url;
    setImage(image); 
    console.log(image)
    console.log(image_url + '/' + imageF);
  }
   
  useEffect(()=>{
    GetImage();
  },[])

  return (
    <>
    <Header Key={props.Key} Autor={props.Autor} Data={props.Data} src={image_url + '/' + imageF} />
    <TouchableOpacity onPress={() => navigation.navigate("ReceitaHome")} style={style.container}> 
      <ImageRecipe Image={props.Image}/>
    </TouchableOpacity>
    <RecipeInfo Titulo={props.Titulo} NumeroEtapas={props.Etapas} Laikado={props.Laikado} Dificuldade={props.Dificuldade} NumeroPorcao={props.NumeroPorcao} Like={props.Likes} Comment={props.Comment} />
    </>
  );
}

const style = StyleSheet.create({
  container:{
    
  },
});

export default ReceitaFeed;