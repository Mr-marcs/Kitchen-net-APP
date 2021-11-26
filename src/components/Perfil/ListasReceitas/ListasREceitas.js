import React,{useState,useEffect} from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import RecipeList from '@components/RecipeListLine/RecipeList/RecipeList';
import lul from '@assets/imgs/lul.png';
import axios from 'axios';
import { base_url,image_url } from '@src/config/base_url.config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingComponent from '@components/Loading/Component/LoadingComponent';


const ListasReceitas = (props) => {
    
    const [playlists, setPlaylists] = useState();
    const [page,setPage] = useState(0);

    async function GetPlaylist(){
        const token = await AsyncStorage.getItem('token');
        const result = await axios.post(base_url + '/mypublicplaylists',{page:page},{headers: {token}}); 
    
        setPlaylists(result.data)
    }

    useEffect(()=>{
        GetPlaylist()
    },[])
    return (
      <Layout style={style.container}>
          <Text style={style.text}>Listas de receitas:</Text>
          <Layout style={style.listas}>

          {(!playlists)? <LoadingComponent/>
          :
          playlists.map(item=>{              
              return(
                <RecipeList playlistId = {item.Id} source={item.Thumbnail} name={item.Name} authorLogin={item.Author} authorName={item.AuthorName} date={item.Creation_date}/>
              )
          })
          }

            
            
            
          </Layout>
          <Text style={style.verMais}>Ver mais</Text>
      </Layout>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        marginBottom: 100,
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
    verMais: {
        marginTop: 20,
        textAlign: 'center',
    },
    listas: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});

export default ListasReceitas;
