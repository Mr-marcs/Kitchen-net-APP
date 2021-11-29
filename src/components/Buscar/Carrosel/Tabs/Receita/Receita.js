import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Image, TouchableHighlight, Button, ScrollView, Text } from 'react-native';
import Header from '@components/header/header';
import { Avatar, Layout } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import pfp from '@assets/imgs/pfp.jpg';
const imagencategoria = {uri: 'https://i2.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food-1024x683.jpg'};
import { Divider } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import LoadingComponent from '@components/Loading/Component/LoadingComponent';
import Screen from '@components/screen/screen';
import ReceitaFeed from '@components/ReceitaFeed/ReceitaFeed';
import {base_url, image_url} from '@src/config/base_url.config';

/*const Header = (props) => {
    const Verified = (props) => {
        if (props.verified){
            return(
                <Icon2 name="verified" size={28} color="#04a4f4" />
            );
        }
        else{
            return(null);
        }
    }
    return(
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row'}}>
                <Avatar source={pfp} size="large"/>
                <View style={{marginLeft: 10, justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 18 }}>TCC_Vitor_Ferreira</Text>
                    <Text style={{fontSize: 12, color: '#818181'}}>2 semanas atrás</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Verified verified={props.verified}/>
                <TouchableOpacity>
                    <Icon name="dots-vertical" size={24} color="#000"  style={{marginLeft: 10,}}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}*/

const Receita = (props) => {
    /*
    const navigation = useNavigation();
    return(
        <View style={{marginTop: 20,}}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("ReceitaHome")}>
                <View>
                    <Header verified={props.verified}/>
                    <Image source={imagencategoria} style={{height: 300, marginTop: 20}}/>
                    <View style={{marginTop: 20, marginBottom: 20}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Hamburger louko maluko</Text>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <Text style={{color: '#818181', fontSize: 12, marginRight: 20}}>6 Etapas</Text>
                            <Text style={{color: '#818181', fontSize: 12, marginRight: 20}}>1 Porção</Text>
                            <Text style={{color: '#818181', fontSize: 12, marginRight: 20}}>Nível Intermediário</Text>
                        </View>
                        <Layout style={{marginTop: 10, flexDirection: 'row'}}>
                            <Layout style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Icon3 name="hearto" size={14} color="#F24333" />
                                <Text style={{marginLeft: 10}}>500</Text>
                            </Layout>
                            <Layout style={{flexDirection: 'row', alignItems: 'center', marginLeft: 20}}>
                                <Icon name="comment-outline" size={14} color="#000" />
                                <Text style={{marginLeft: 10}}>13</Text>
                            </Layout>
                        </Layout>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <Divider width={1}/>
        </View>
    );    
}*/

  const [recipe,setRecipe] = useState();
  const [page,setPage] = useState(0);
  const [search,setSearch] = useState("chup")

  async function getFeedRecipes() {
    const token = await AsyncStorage.getItem('token');
    
    const result = null;
    if (props.verified){
        result = await axios.post(base_url + '/recipe/official/search',{page: page, search: search},{
            headers:{
              token: token
            }
        })
    }
    else{
        result = await axios.post(base_url + '/recipe/comunity/search',{page: page, search: search},{
            headers:{
              token: token
            }
        })
    }
    
    //console.log(result.data[0]);
    setRecipe(result.data)
  }
    
    useEffect(()=>{
      getFeedRecipes();
    },[])

  return (
    <View>
        <ScrollView>        
          <Screen>
            {(!recipe)? <LoadingComponent /> :
            (recipe.map(item=>{
              return(
              (item===null)? null
              :   
              <ReceitaFeed Autor={item.Author_name} Data={item.Created_At} Titulo={item.Name} 
                Etapas={item.Stepes.length} Dificuldade={item.Difficulty.Name} Likes={item.Likes} 
                Comment={item.Comments_Amount} NumeroPorcao={item.Portions} Laikado={item.Is_liked}
                Key={item.Author} Image={image_url + '/' + item.thumbnail} RecipeId={item.Id} RecipeAuthor={item.Author} Imagem={image_url + '/' + item.thumbnail} 
                Nome={item.Name} 
                Autor={item.Author_name} Date={item.Created_At} like={item.Likes} key={item.Author + '@' + item.Id}
              />
              )
              }))
            }
          </Screen>
        </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex: 0,
    paddingBottom: 120,
  },
});

export default Receita;