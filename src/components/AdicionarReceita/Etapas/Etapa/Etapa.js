import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
const imagencategoria = {uri: 'https://i2.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food-1024x683.jpg'};

const Etapa = () => {
    return (
      <Layout style={style.container}>
          <Text style={style.texto}>1</Text>
          <Image source={imagencategoria} style={style.image}/>
          <View style={style.containerTexto}>
            <Text style={style.texto}>Primeiro corte os igredientes exempa</Text>
          </View>
      </Layout>
    );
}

const style = StyleSheet.create({
    container:{
        marginTop: 10,
        flex: 1,
        height: 80,
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 10,
    },
    image: {
        width: 70,
        height: 70,
    },
    texto: {
        color: '#fff',
        fontSize: 14,
    },
    containerTexto: {
        flexWrap: 'wrap',
    },
});

export default Etapa;
