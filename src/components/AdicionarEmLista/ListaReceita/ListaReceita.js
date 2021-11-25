import React from 'react';
import { StyleSheet, ImageBackground, ToastAndroid, Image, View, TouchableWithoutFeedback} from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import HeaderGoBack from '@components/HeaderGoBack/HeaderGoBack';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

const ListaReceita = (props) => {
    const navigation = useNavigation();
    const showToast = () => {
        ToastAndroid.show("Erro em conectar em adicionar!", ToastAndroid.LONG);
    };
    const showToast2 = () => {
        ToastAndroid.show("Adicionado em: \"" +props.name + "\"", ToastAndroid.LONG);
    };

    const Selecionar = () => {
        //Escolher lista POST para Selecionar e adicionar
        showToast2();
        navigation.goBack();
    }

    return (
        <Layout style={style.container}>
            <TouchableWithoutFeedback onPress={Selecionar}>
                <View style={{flexDirection: 'row', alignItems:'center'}}>
                    <Image source={{uri:props.image}} style={{width:70, height:70}}/>
                    <Text style={{fontSize: 16, marginLeft: 10,}}>{props.name}</Text>
                </View>
            </TouchableWithoutFeedback>
        </Layout>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
});

export default ListaReceita;