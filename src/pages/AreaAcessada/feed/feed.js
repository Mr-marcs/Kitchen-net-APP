import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, TouchableHighlight, Button, ScrollView, Text } from 'react-native';
import Header from '@components/header/header';
import Screen from '@components/screen/screen';
import ReceitaFeed from '@components/ReceitaFeed/ReceitaFeed';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {base_url} from '@src/config/base_url.config';

const Feed = (props) => {
  
  const [page,setPage] = useState();
  const [recipe,setRecipe] = useState();

  async function getFeedRecipes() {
    const token = await AsyncStorage.getItem('token');
    
    const result = await axios.post(base_url + '/feed',{page: page},{
      headers:{
        token: token
      }
    })
    setRecipe(result.data);
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
          return(
          <ReceitaFeed Autor={item.Author_name} Data={item.Created_At} Titulo={item.Name} 
           Etapas={item.Stepes.length} Dificuldade={item.Difficulty.Name} Likes={item.Likes} 
           Comment={item.Comments_Amount} NumeroPorcao={item.Portions} Laikado={item.Is_liked}
           Key={item.Author}/>
        )
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