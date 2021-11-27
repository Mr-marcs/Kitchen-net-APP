import React, { useEffect,useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, ImageBackground, TouchableHighlight, Image, View } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import HeaderSemBuscar from '@components/HeaderSemBucar/HeaderSemBuscar';
import lul from '@assets/imgs/lul.png';
import Receita from '@components/Receita/Receita';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import { base_url,image_url } from '@src/config/base_url.config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingComponent from '@components/Loading/Component/LoadingComponent';


const ListaReceitas = ({route}) => {
    const [recipes, setRecipes] = useState();
    const [page,setPage] = useState(0);
    const navigation = useNavigation();
    const {image, recipeId, recipeName, authorLogin, authorName, date, playlistId} = route.params;
    console.log(route.params);

    async function GetRecipe(){
        const token = await AsyncStorage.getItem('token');
        const result = await axios.post(base_url + '/playlist/recipes',{PlaylistId:playlistId, PlaylistAuthor:authorLogin ,page:page},{headers: {token: token}}); 
        setRecipes(result.data)
    }

    useEffect(()=>{
        GetRecipe()
    },[])

    return (
        <Layout>
            <HeaderSemBuscar name="Lista de receitas"/>
            <ScrollView>
                <ImageBackground source={{uri:image_url + "/" + image}} style={{height: 220}} blurRadius={5}>
                    <View style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', height: 220}}></View>
                </ImageBackground>
                <View style={style.flex}>
                    <ImageBackground source={{uri:image_url + "/" + image}} style={style.mainImage}></ImageBackground>
                </View>
                <View style={{alignItems: 'center'}}>
                    <View style={style.tituloContainer}>
                        <Text style={style.titulo}>{recipeName}</Text>
                    </View>
                </View>
                <Text style={{textAlign: 'center', marginTop: 10,}}>Criado por: {authorName}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'center', padding: 20,}}>
                    <Text style={{fontSize: 12,}}>Criado em: {date}</Text>
                </View>
                <View style={{padding: 20, paddingBottom: 120 }}>
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
                </View>
            </ScrollView>
        </Layout>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainImage: {
        width: 180,
        height: 180,
        position: 'absolute',
        top: -120,
    },
    flex: {
        alignItems: 'center',
    },
    titulo: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 70,
    },
    tituloContainer: {
        width: 300,
    },
});

export default ListaReceitas;