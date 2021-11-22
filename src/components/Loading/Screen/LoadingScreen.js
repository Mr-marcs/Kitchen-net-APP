import React from 'react';
import { StyleSheet, Image, View, ActivityIndicator} from 'react-native';
import Logo from '@assets/imgs/logo.png';

const LoadingScreen = () => {
    return (
        <View style={style.container}>
            <Image source={Logo} style={{width: 200, height: 200, marginBottom: 20,}}/>
            <ActivityIndicator size="large" color="#F24333"/>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default LoadingScreen;
