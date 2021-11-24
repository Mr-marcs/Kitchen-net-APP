import React,{useState,useEffect} from 'react';
import { StyleSheet, View, TouchableHighlight, ScrollView} from 'react-native';
import Screen from '@components/screen/screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '@components/header/header';
import RecomendacoesCategoria from '@components/recomendacoes_categoria/recomendacoes_categoria';
import CarouselPopularity from '@components/carouselPopularity/carouselPopularity';
import { Layout, Text } from '@ui-kitten/components';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { set } from 'react-native-reanimated';
import Categoria from '@components/AdicionarReceita/Categorias/Categoria/Categoria';
import {base_url} from '@src/config/base_url.config';
import LoadingComponent from '@components/Loading/Component/LoadingComponent';

const Stack = createNativeStackNavigator();

const Home = () => {
    
    const [username,setUsername] = useState();
    const [category,setCategory] = useState();

    async function GetUserPreferences(){
        const token = await AsyncStorage.getItem('token');
        
        const response = await axios.get(base_url+'/user',
        {
            headers: {
                'token': token
            }
        })
        setUsername(response.data.result.user.name);
        
        const categories = await axios.get(base_url + '/home/categories',{
            headers: {
                token: token
            }
        })
        console.log(categories.data)
        setCategory(categories.data)
    }

    useEffect(() => {
        GetUserPreferences();   
    },[])

    return (
        <View style={style.container}>
            <Header name="Home"/>
            <ScrollView  >
                <Screen>
                    <Layout style={style.content}>
                        <Text style={style.titulo}>Olá, {username}</Text>
                        <Text style={style.subTitulo}>O que gostaria de cozinhar hoje?</Text>
                        {
                            (category==undefined)?
                            <LoadingComponent/>
                            :
                            //DINAMICO
                            category.map(item=>{
                                return(
                                    <RecomendacoesCategoria name={item.CategoryName} key={item.Id}/>
                                )
                            })
                            //DINAMICO
                        }        
                        <CarouselPopularity />
                    </Layout>
                </Screen>
            </ScrollView>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
    },
    content: {
        marginTop: 20,
        flex: 1,
    },
    titulo: {
        fontWeight: "bold",
        fontSize: 40,
    },
    subTitulo: {
        fontSize: 20,
        fontFamily: 'Oswald_400Regular',
    },
});

export default Home;
