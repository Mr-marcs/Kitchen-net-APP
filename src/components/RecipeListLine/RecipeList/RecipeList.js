import React from 'react';
import { StyleSheet, TouchableHighlight, ScrollView, ImageBackground, Image } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';

const RecipeList = (props) => {
    return (
      <Layout style={style.container}>
          <Image source={props.source} style={style.containerImage}/>
          <Layout style={style.areaTexto}>
              <Text style={style.titulo}>{props.name}</Text>
          </Layout>
      </Layout>
    );
}

const style = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    containerImage:{
        width: 160,
        height: 180,
    },
    areaTexto: {
        width: 160,
        height: 70,
        backgroundColor: '#676767',
        padding: 10,
    },
    titulo: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
    },
});

export default RecipeList;