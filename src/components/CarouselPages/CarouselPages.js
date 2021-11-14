import React from 'react';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import Receita from '@components/Receita/Receita';

const CarouselPages = () => {
    return (
      <Layout style={style.container}>
        <Receita />
        <Receita />
        <Receita />
        <Receita />
      </Layout>
    );
}

const style = StyleSheet.create({
    container: {
        marginTop: 20,
    }
});

export default CarouselPages;
