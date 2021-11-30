import React,{useState,useEffect} from 'react';
import { StyleSheet, ScrollView , Dimensions, StatusBar, TouchableOpacity, TextInput, View } from 'react-native';
import { Text, Avatar } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/core';
import pfp from '@assets/imgs/pfp.jpg';
import axios from 'axios';
import { base_url,image_url } from '@src/config/base_url.config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingComponent from '@components/Loading/Component/LoadingComponent';

const Pessoas = (props) => {
    
    return (
        <ScrollView style={style.container}>
            <Pessoa />
        </ScrollView>
    );
}

const Pessoa = () => {
    const [users, setUsers] = useState();
    const [page,setPage] = useState(0);
    const [search,setSearch] = useState("m")

    async function GetUser(){        
        const token = await AsyncStorage.getItem('token');
        const result = await axios.post(base_url + '/users/search/' + search +'/' + page,{},{headers: {token:token}}); 
        setUsers(result.data);
    }

    useEffect(()=>{
        GetUser()
    },[])
    const [seguindo, setSeguindo] = useState();
    /*{(!users)? <LoadingComponent/>
        :
        users.map(item=>{              
            return(
                setSeguindo(item.isFollowing)
            )
        })
    }*/
    
    const buttonSeguindoClick = () => {
        setSeguindo(!seguindo);
    }

    const ButtonSeguindo = () => {          
                if(seguindo){
                    return (
                        <View style={{backgroundColor: '#F24333', borderColor: '#F24333', borderWidth: 1, borderRadius: 10, width: 80, height: 35, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{ color:'#fff'}}>Seguindo</Text>
                        </View>
                    );
                }
                else{
                    return(
                        <View style={{backgroundColor: '#fff', borderColor: '#F24333', borderWidth: 1, borderRadius: 10, width: 80, height: 35, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>Seguir</Text>
                        </View>
                    );
                }
    }

    return(
        <View>
            {(!users)? <LoadingComponent/>
          :
          users.map(item=>{       
              return(
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10,}}>            
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Avatar size="large" source={{uri: image_url + '/' + item.image}}/>
                        <Text style={{fontSize: 16, marginLeft: 10}}>{item.username}</Text>
                    </View>           
                    <TouchableOpacity onPress={() => buttonSeguindoClick()}>
                        <ButtonSeguindo />
                    </TouchableOpacity>
                </View>
              )
          })
          }
        </View>
        
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
    },
});

export default Pessoas;