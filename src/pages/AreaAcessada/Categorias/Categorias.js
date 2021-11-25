import React, {useState,useEffect} from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Toggle, Layout, Text } from '@ui-kitten/components';
import HeaderSemBuscar from '@components/HeaderSemBucar/HeaderSemBuscar';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Receita from '@components/Buscar/Carrosel/Tabs/Receita/Receita';
import LoadingComponent from '@components/Loading/Component/LoadingComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { base_url,image_url } from '@src/config/base_url.config';
import ReceitaFeed from '@components/ReceitaFeed/ReceitaFeed';

const Categorias = ({route, navigation}) => {
    const {name, id} = route.params;
    
    const [page, setPage] = useState(0);
    const [recipes, setRecipes] = useState();

    async function getFeedRecipes() {
        const token = await AsyncStorage.getItem('token');
        
        const result = await axios.post(base_url + '/home/category/recipes',{page: page,category: id},{
          headers:{
            token: token
          }
        })
    
        setRecipes(result.data)
      }
        
        useEffect(()=>{
          getFeedRecipes();
        },[])
    
    return (
        <Layout style={style.container}>
            <HeaderSemBuscar name={"Categoria " + name}/>
            <View style={{paddingBottom: 120,}}>
                <ScrollView style={{padding: 20}}>
                    {(!recipes)?
                        <LoadingComponent />
                    :
                    (recipes.map(item=>{
                        return(
                            (item===null)? null
                            :   
                            <ReceitaFeed Autor={item.Author_name} Data={item.Created_At} Titulo={item.Name} 
                            Etapas={item.Stepes.length} Dificuldade={item.Difficulty.Name} Likes={item.Likes} 
                            Comment={item.Comments_Amount} NumeroPorcao={item.Portions} Laikado={item.Is_liked}
                            Key={item.Author} Image={image_url + '/' + item.thumbnail}/>
                        )
                    }))
                    }       
                </ScrollView>
            </View>
        </Layout>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
    },
});

export default Categorias;
