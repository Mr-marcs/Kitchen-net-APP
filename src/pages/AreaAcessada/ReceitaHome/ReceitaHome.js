import React, {useEffect, useState} from 'react';
import { StyleSheet, Image, TouchableOpacity, Platform, StatusBar, ScrollView, View, TouchableHighlight } from 'react-native';
import { Layout, Tab, TabView, Text } from '@ui-kitten/components';
import Header from '@components/ReceitaHome/Header/Header';
import ReceitaMenu from '@components/ReceitaHome/ReceitaMenu/ReceitaMenu';
import Descricao from '@components/ReceitaHome/Descricao/Descricao';
import { useNavigation } from '@react-navigation/core';
import Comentarios from '@components/ReceitaHome/Comentarios/Comentarios';
import axios from 'axios';
import { base_url, image_url } from '@src/config/base_url.config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingComponent from '@components/Loading/Component/LoadingComponent';

const ReceitaHome = ({route}) => {
    const navigation = useNavigation();
    const recipe = route.params.props;
    
    const [recipeInfo, setRecipeInfo] = useState();

    async function GetRecipe(){
        const token = await AsyncStorage.getItem('token');
        //console.log(token)
        
        const result = await axios.post(base_url + `/recipe/${recipe.RecipeId}`,{author: recipe.RecipeAuthor,amount:0},
        {
            headers: {
                token:token
            }
        })
        //console.log(result.data)
        setRecipeInfo(result.data.recipe)
    }

    useEffect(()=>{
        GetRecipe();
    },[])

    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <View style={style.container}>
            {(!recipeInfo)? <LoadingComponent/>
            :
            <>
            
            <ScrollView>
            <Header IdDificuldade={recipeInfo.Difficulty.Id} Imagem={recipe.Imagem} Porcao={recipeInfo.Portions}/>
                <ReceitaMenu Descricao={recipeInfo.Description} Nome={recipeInfo.Name} Dificuldade={recipeInfo.Difficulty.Name} Laikado={recipeInfo.Is_liked} Likes={recipe.like}/>
                <TabView
                    selectedIndex={selectedIndex}
                    onSelect={index => setSelectedIndex(index)}
                >                                        
                    <Tab title="Descrição">
                        {
                        (!recipe)? <LoadingComponent/>
                        :
                        <Descricao Etapa={recipeInfo.Stepes} Igredientes={recipeInfo.Igredients}/>
                        }
                    </Tab>                                     
                    <Tab title="Comentários">
                        <Comentarios IdReceita={recipe.RecipeId} Login={recipe.RecipeAuthor}/>
                    </Tab>
                </TabView>
            </ScrollView>
            <Layout style={style.comecar}>
                <TouchableOpacity onPress={() => navigation.navigate("Etapa")} style={style.button}>
                    <Text style={style.comecarTexto}>Começar</Text>
                </TouchableOpacity>
            </Layout>
            </>}
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
    },
    comecar: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    comecarTexto: {
        color: '#fff',
        textAlign: 'center',
    },
    button: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 30,
        width: 300,
    },
});

export default ReceitaHome;