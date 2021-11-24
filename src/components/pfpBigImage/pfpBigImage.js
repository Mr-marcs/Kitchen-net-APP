import React, { useState,useEffect } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Layout } from '@ui-kitten/components';
import axios from 'axios';
import { image_url,base_url } from '@src/config/base_url.config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PfpBigImage = (props) => {
    
    const [image,setImage] = useState();
    async function GetImage(){
    
        const token = await AsyncStorage.getItem('token');
        const response = await axios.get(base_url + `/users/profiles/${props.Id}`,{headers:{token:token}});
        
        const src = response.data.result.user.image_url;
        setImage(src); 
      }
    
      useEffect(()=>{
        GetImage();
      },[])
    
    
    return (
        <Image source={{uri:`${image_url + '/' + image}`}} style={style.pfp}/>
    );
}

const style = StyleSheet.create({
    pfp: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 10,
    },
});

export default PfpBigImage;
