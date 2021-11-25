import React, { useEffect,useState } from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import Receita from '@components/Receita/Receita';
import axios from 'axios';
import { base_url,image_url } from '@src/config/base_url.config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingComponent from '@components/Loading/Component/LoadingComponent';

const ReceitaCriada = () => {
    
    const [recipes, setRecipes] = useState();
    const [page,setPage] = useState(0);

    async function GetRecipe(){
        const token = await AsyncStorage.getItem('token');
        const result = await axios.post(base_url + '/myrecipes',{page:page},{headers: {token}}); 
    
        setRecipes(result.data)
    }

    useEffect(()=>{
        GetRecipe()
    },[])

    return (
      <Layout style={style.container}>
          <Text style={style.text}>Receitas Criadas:</Text>
          
          {(!recipes)? <LoadingComponent/>
          :
          recipes.map(item=>{
              return(
                <Receita RecipeId={item.Id} RecipeAuthor={item.Author} Imagem={image_url + '/' + item.thumbnail} 
                Nome={item.Name} 
                Autor={item.Author_name} Date={item.Created_At} like={item.Likes} key={item.Author + '@' + item.Id}/>              
              )
          })
          }
          
          <Text style={style.verMais}>Ver mais</Text>
      </Layout>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
    verMais: {
        textAlign: 'center',
    },
});

export default ReceitaCriada;
