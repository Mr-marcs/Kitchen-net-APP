import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import Receita from '@components/Receita/Receita';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {base_url} from '@src/config/base_url.config';
import LoadingComponent from '@components/Loading/Component/LoadingComponent';

const CarouselPages = (props) => {

    const [recipe,setRecipe] = useState();
    const index = props.Index    
    async function GetRecipes(carrosel_index) {

        const token = await AsyncStorage.getItem('token');
        
        switch (carrosel_index) {
          case 0:
            const like = await axios.post(base_url + '/home/mostliked',{page:0},{headers:{'token': token}})
            setRecipe(like.data)
            break;
          case 1:
            const recente = await axios.post(base_url + '/home/mostrecent',{page:0},{headers:{'token': token}})
            setRecipe(recente.data);
            break;
          case 2:
            const treading = await axios.post(base_url + '/home/trending',{page:0},{headers:{'token': token}})
            setRecipe(treading.data)  
            break;
        }

        console.log(recipe)
      }

    useEffect(()=>{
        GetRecipes(index);
    },[])

    return (
      <Layout style={style.container}>
          {
            (!recipe)?
            <LoadingComponent/>
            :
            (recipe.map(item=>{
              return(
                <Receita Nome={item.Name} Autor={item.Author} Date={item.Created_At} like={item.Likes} key={item.Author + '@' + item.Id}/>
              )
            }))
          }
      </Layout>
    );
}

const style = StyleSheet.create({
    container: {
        marginTop: 20,
    }
});

export default CarouselPages;
