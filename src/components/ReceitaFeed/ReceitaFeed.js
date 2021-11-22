import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import Header from '@components/ReceitaFeed/header/header'
import ImageRecipe from './imageRecipe/ImageRecipe';
import RecipeInfo from './RecipeInfo/RecipeInfo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

const ReceitaFeed = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ReceitaHome")} style={style.container}>
      <Header />
      <ImageRecipe />
      <RecipeInfo />
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
  },
});

export default ReceitaFeed;