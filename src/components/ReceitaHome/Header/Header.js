import React from 'react';
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Hat from '@assets/svg/hat.svg';
const imagencategoria = {uri: 'https://i2.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food-1024x683.jpg'};

const Header = () => {
    const navigation = useNavigation();
    return (
      <View  style={style.container}>
        <Image source={imagencategoria} style={style.image}/>
        <View style={style.header}>
            <View style={style.highlight}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="md-arrow-back" size={24} color="#fff"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon2 name="dots-three-vertical" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
        <View style={style.linha2}>
            <View style={style.flex}>
                <Hat width={60} height={60}/>
                <Text style={style.porcao}>1 Porção</Text>   
            </View>
        </View>
      </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
    },
    header: {
        width: '100%',
        position: 'absolute',
        top: 30,
        paddingLeft: 20,
        paddingRight: 20,
    },
    highlight: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    image: {
      height: 240,  
    },
    linha2: {
        width: '100%',
        position: 'absolute',
        top: 170,
        paddingLeft: 20,
        paddingRight: 20,
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    porcao: {
        color: '#fff',
        backgroundColor: '#BA1B1D',
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 30,
    },
});

export default Header;