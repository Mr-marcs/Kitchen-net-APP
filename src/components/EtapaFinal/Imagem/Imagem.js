import React, {useState} from 'react';
import { StyleSheet, View, ImageBackground, Image } from 'react-native';
import { Text } from '@ui-kitten/components';
const imagencategoria = {uri: 'https://i2.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food-1024x683.jpg'};
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import pfp from '@assets/imgs/pfp.jpg';

const Imagem = () => {

    return (
        <View>
            <ImageBackground source={imagencategoria} style={{height: 380, justifyContent: 'center', alignItems: 'center'}} blurRadius={10}>
                <AnimatedCircularProgress
                    size={220}
                    width={15}
                    fill={50}
                    tintColor="#E24333"
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor="#3d5875" 
                />
                <View style={style.level}>
                    <Text style={{fontSize: 38,}}>300/600</Text>
                    <Text style={{fontSize: 24,}}>+400xp</Text>
                </View>
                <Image source={pfp} style={style.pfp} blurRadius={5}/>
            </ImageBackground>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
    },
    pfp: {
        width: 200,
        height: 200,
        borderRadius: 999,
        position: 'absolute',
        opacity: 0.3,
        top: 90,
    },
    level: {
        backgroundColor: '#FFF',
        width: 200,
        height: 200,
        borderRadius: 999,
        position: 'absolute',
        top: 90,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Imagem;