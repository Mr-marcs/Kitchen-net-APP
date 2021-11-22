import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight, Button, ScrollView } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import Header from '@components/Etapa/Header/Header';
import Dica from '@components/Etapa/Dica/Dica';
import Timer from '@components/Etapa/Timer/Timer';
import { Divider } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

const imagencategoria = {uri: 'https://i2.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food-1024x683.jpg'};

const Etapa = () => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <ScrollView >
        <Header />
        <Image source={imagencategoria} style={{height: 280, marginTop: 20,}}/>
        <Text style={{padding: 20, fontSize: 16, backgroundColor: '#fff'}}>1 - Retire as batatas da embalagem e coloque-as em um recipiente a parte</Text>
        <Divider orientation="horizontal" />
        <Timer />
        <Divider orientation="horizontal" />
        <Dica />
        <Divider orientation="horizontal" />
      </ScrollView>
      <Layout style={{padding: 20, justifyContent: 'center', alignItems: 'center', elevation: 10}}>
        <TouchableOpacity onPress={() => navigation.navigate("EtapaFinal")} style={{backgroundColor: '#E24333', padding: 15, width: 300, borderRadius: 30,}}>
          <Text style={{color: '#fff', textAlign: 'center'}}>Avançar</Text>
        </TouchableOpacity>
      </Layout>
    </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff'
  },
});

export default Etapa;