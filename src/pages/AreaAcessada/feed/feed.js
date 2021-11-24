import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, TouchableHighlight, Button, ScrollView, Text } from 'react-native';
import Header from '@components/header/header';
import Screen from '@components/screen/screen';
import ReceitaFeed from '@components/ReceitaFeed/ReceitaFeed';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {base_url, image_url} from '@src/config/base_url.config';

const Feed = (props) => {
  
  const [page,setPage] = useState(0);
  const [recipe,setRecipe] = useState();

  async function getFeedRecipes() {r
    const token = await AsyncStorage.getItem('token');
    
    const result = await axios.post(base_url + '/feed',{page: page},{
      headers:{
        token: token
      }
    })
    console.log(result)
    setRecipe(result[0])
  }
    
    useEffect(()=>{
      getFeedRecipes();
    },[])

  return (
    <ScrollView style={style.container}>
      <Header name="Feed"/>
      <Screen>
        {(!recipe)?
        <Text>Carregando...</Text>
        :
        (recipe.map(item=>{
          return (item===null)? null
          :        
          <ReceitaFeed Autor={item.Author_name} Data={item.Created_At} Titulo={item.Name} 
           Etapas={item.Stepes.length} Dificuldade={item.Difficulty.Name} Likes={item.Likes} 
           Comment={item.Comments_Amount} NumeroPorcao={item.Portions} Laikado={item.Is_liked}
           Key={item.Author} Image={image_url + '/' + item.thumbnail}/>  
      }))
        }
      </Screen>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
  },
});

export default Feed;