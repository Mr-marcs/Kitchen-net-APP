import React, {useState,useEffect} from 'react';
import { StyleSheet, Image, TouchableOpacity, Platform, StatusBar, ScrollView, View, TouchableHighlight } from 'react-native';
import { Layout, Avatar, Text, Input } from '@ui-kitten/components';
import pfp from '@assets/imgs/pfp.jpg';
import Comentario from './Comentario/Comentario';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { base_url, image_url } from '@src/config/base_url.config';
import Login from '@pages/AreaLogin/login/login';
import LoadingComponent from '@components/Loading/Component/LoadingComponent';

const Comentarios = (props) => {
    
    const [comment, setComment] = useState();
    const [page,setPage] = useState(0);
    const [image,setimage] = useState();
    const [commentCount,setCommentCount] = useState(0);

    async function GetComment(){
        const token = await AsyncStorage.getItem('token');

        const result = await axios.get(base_url + `/comment/${props.Login}/${props.IdReceita}/${page}`,{headers:{token}})
        const user = await axios.get(base_url + `/user`,{headers:{token:token}});
        
        const src = user.data.result.user.image_url;
        setimage(src)
        setComment(result.data);
        setCommentCount(result.data.length)
    }
    
    useEffect(()=>{
        GetComment();
    },[])

    const [comentario, setComentario] = useState('');
    return (
        <Layout style={style.container}>
            <Text style={style.titulo}>{commentCount} Comentários:</Text>
            <Layout style={style.containerComentario}>
                <Avatar source={{uri: image_url + '/' + image}} size="large"/>
                <Input
                    placeholder='Adicionar comentário...'
                    value={comentario}
                    onChangeText={nextValue => setComentario(nextValue)}
                    style={{flex: 1, marginLeft: 10,}}
                />
            </Layout>
            {(!comment)? <LoadingComponent/>
            :
            comment.map(item=>{
                return(
                    <Comentario Imagem={image_url + '/' + item.URl} Nome={item.Author} Data={item.Date_of} Comentario={item.Comment}/>
                )
            })
            }
        </Layout>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
    },
    titulo:{
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 20,
    },
    containerComentario: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default Comentarios;