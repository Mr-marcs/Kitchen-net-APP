import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import Header from '@components/ReceitaFeed/header/header'
import ImageRecipe from './imageRecipe/ImageRecipe';
import RecipeInfo from './RecipeInfo/RecipeInfo';

const ReceitaFeed = () => {
  return (
    <Layout style={style.container}>
      <Header />
      <ImageRecipe />
      <RecipeInfo />
    </Layout>
  );
}

const style = StyleSheet.create({
  container:{
    
  },
});

export default ReceitaFeed;