import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import formStyle from '@styles/form';
import Screen from '@components/screen/screen';
import { useNavigation } from '@react-navigation/core';

const width = Dimensions.get("window").width;

const EsqueceuSenhaConfirmacao = () => {
    const navigation = useNavigation();
    return (
        <Screen>
            <KeyboardAvoidingView style={style.form}>
                <Image 
                    style={formStyle.logo}
                    source={require('@assets/imgs/logo.png')}
                />
                <View style={{marginTop: 20, width: width-45, alignItems: 'center', padding:20, elevation:1}}>
                    <Text>Foi enviado para seu email de Reset de senha!</Text>
                    <TouchableHighlight activeOpacity={0.6} underlayColor="#bf3528" style={[formStyle.button, formStyle.buttonCadastrar]} onPress={() => navigation.navigate('Login')}>
                        <Text style={formStyle.buttonCadastrarText}>Voltar</Text>
                    </TouchableHighlight>
                </View>
            </KeyboardAvoidingView>
        </Screen>
    );
}

const style = StyleSheet.create({
    form: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default EsqueceuSenhaConfirmacao;