import React, {useEffect, useState} from 'react';
import { StyleSheet, ScrollView , Dimensions, StatusBar, TouchableOpacity, Image, View } from 'react-native';
import { Text, Avatar } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/core';
import lul from '@assets/imgs/lul.png';
import RecipeList from '@components/RecipeListLine/RecipeList/RecipeList';
import { Overlay } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import LoadingComponent from '@components/Loading/Component/LoadingComponent';
import { base_url } from '@src/config/base_url.config';

const ListaReceitas = () => {
    const [listas, setListas] = useState();
    const [page,setPage] = useState(0);
    const [search,setSearch] = useState("melh")

    const getLists = async() => {
        const token = await AsyncStorage.getItem('token');
        
        const result = await axios.post(base_url + '/playlist/search', {page: page, search: search},
        { 
            headers: {
                token: token,
            }
        })
        setListas(result.data);
    }

    useEffect(() => {
        getLists();
    },[]);


    return(
        <View style={style.container}>
            {
                (!listas) ? <LoadingComponent/> :
                (
                    listas.map(item => {
                        return (
                            (item===null) ? null : 
                            <RecipeList 
                            playlistId = {item.Id} source={item.Thumbnail} name={item.Name} authorLogin={item.Author} authorName={item.AuthorName} date={item.Creation_date}
                            />
                        );
                    })
                )
            }
        </View>
    );
}

const width = Dimensions.get("window").width;

/*const ListaReceita = () => {
    return (
        <View style={{marginBottom: 20}}>
            <Image source={lul} style={{width: width/2-25, height: 180}}/>
            <View style={{backgroundColor: '#676767', height: 70, width: width/2-25, justifyContent: 'center'}}>
                <Text style={{color: '#fff', fontSize: 14, textAlign: 'center'}}>Seleção exclusiva dos integrantes do TCC </Text>
            </View>
        </View>
    );
}*/

const style = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
});

export default ListaReceitas;