import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import Header from '@components/EtapaFinal/Header/Header';
import Imagem from '@components/EtapaFinal/Imagem/Imagem';
import ImagemHeader from '@components/EtapaFinal/ImagemHeader/ImagemHeader';
import Comentarios from '@components/EtapaFinal/Comentarios/Comentarios';

const EtapaFinal = () => {
  return (
    <ScrollView>
        <Header />
        <Imagem />
        <ImagemHeader />
        <Comentarios />
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container:{
      flex: 1,
  },
});

export default EtapaFinal;