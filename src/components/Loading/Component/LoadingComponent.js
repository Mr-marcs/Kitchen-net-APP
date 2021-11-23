import React from 'react';
import { StyleSheet, Image, View, ActivityIndicator} from 'react-native';
import Logo from '@assets/imgs/logo.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Layout, Text } from '@ui-kitten/components';

const LoadingComponent = () => {
    return (
        <View style={style.container}>
            <View style={{flexDirection: 'row'}}>
                <Text>Carregando componentes...</Text>
                <ActivityIndicator size="small" style={{marginLeft: 10, justifyContent: 'center'}} color="#F24333"/>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        marginBottom: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
    }
});

export default LoadingComponent;
