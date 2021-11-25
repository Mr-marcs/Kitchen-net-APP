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
        //setUsername('Henrique Yamada');
        const categories = await axios.get(base_url + '/home/categories',{
            headers: {
                token: token
            }
        })
        /*const categories = {
            data: [
                {
                    CategoryName: 'Sobremesa',
                    Id: 1,
                },
                {
                    CategoryName: 'Massas',
                    Id: 2,
                },
                {
                    CategoryName: 'Picante',
                    Id: 3,
                },
                {
                    CategoryName: 'Lanches',
                    Id: 4,
                },
            ],
        }*/
        setCategory(categories.data)
    }

    useEffect(() => {
        GetUserPreferences();   
    },[])

    return (
        <Layout style={style.container}>
            <Header name="Home"/>
            <ScrollView>
                <Layout style={{padding: 20,}}>
                    <Layout style={style.content}>
                        <Text style={style.titulo}>Olá, {username}</Text>
                        <Text style={style.subTitulo}>O que gostaria de cozinhar hoje?</Text>
                        {
                            (category==undefined)?
                            <LoadingComponent/>
                            :
                            category.map(item=>{
                                return(
                                    <RecomendacoesCategoria name={item.CategoryName} key={item.Id} cod={item.Id}/>
                                );
                            })
                        }        
                        <CarouselPopularity />
                    </Layout>
                </Layout>
            </ScrollView>
        </Layout>
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
