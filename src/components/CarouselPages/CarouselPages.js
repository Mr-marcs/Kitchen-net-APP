import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import Receita from '@components/Receita/Receita';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {base_url,image_url} from '@src/config/base_url.config';
import LoadingComponent from '@components/Loading/Component/LoadingComponent';

const CarouselPages = (props) => {

    const [recipe ,setRecipe] = useState();
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

      }

    useEffect(()=>{
        GetRecipes(index);
    },[])
    /*const recipes = [
      {
        Id: 1,
        Author: 'Henrique Yamada2',
        thumbnail: 'https://pipe.miroware.io/60a47afdab37f801c2e52bb1/TCC/Receitas/receita1.jpg',
        Name: 'Pão de queijo',
        Created_At: '30/04/2021',
        Likes: 21,
      },
      {
        Id: 2,
        Author: 'Henrique Yamada3',
        thumbnail: 'https://pipe.miroware.io/60a47afdab37f801c2e52bb1/TCC/Receitas/receita2.jpg',
        Name: 'Pudim',
        Created_At: '30/04/2021',
        Likes: 25,
      },
      {
        Id: 3,
        Author: 'Henrique Yamada1',
        thumbnail: 'https://pipe.miroware.io/60a47afdab37f801c2e52bb1/TCC/Receitas/receita3.jpg',
        Name: 'Coxinha',
        Created_At: '31/04/2021',
        Likes: 15,
      },
    ]*/

    return (
      <Layout style={style.container}>
          {
            (!recipe)?
            <LoadingComponent/>
            :
            (recipe.map(item=>{
              return(
                <Receita RecipeId={item.Id} RecipeAuthor={item.Author} Imagem={image_url + '/' + item.thumbnail} Nome={item.Name} Autor={item.Author_name} Date={item.Created_At} like={item.Likes} key={item.Author + '@' + item.Id}/>
                //<Receita RecipeId={item.Id} RecipeAuthor={item.Author} Imagem={item.thumbnail} Nome={item.Name} Date={item.Created_At} like={item.Likes} key={item.Author + '@' + item.Id}/>
              );
            }))
            /*recipes.map(item => (
              <Receita RecipeId={item.Id} RecipeAuthor={item.Author} Imagem={item.thumbnail} Nome={item.Name} Date={item.Created_At} like={item.Likes} key={item.Author + '@' + item.Id}/>
            ))*/
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
