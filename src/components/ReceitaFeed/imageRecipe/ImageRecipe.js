import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
const imagencategoria = {uri: 'https://i2.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food-1024x683.jpg'};

const ImageRecipe = () => {
  return (
    <Layout style={style.container}>
      <Image source={imagencategoria} style={style.image}/>
    </Layout>
  );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
  },
  image: {
    height: 280,
  },
});

export default ImageRecipe;