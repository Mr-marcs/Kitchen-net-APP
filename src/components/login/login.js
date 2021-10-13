import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight } from 'react-native';
import formStyle from '@styles/form';

const Login = () => {
    return (
        <View style={style.form}>
            <Image 
                style={formStyle.logo}
                source={require('@assets/imgs/logo.png')}
            />
            <Text style={formStyle.titulo}>Login</Text>
            <View style={formStyle.form}>
                <TextInput placeholder="Email..." style={formStyle.input}></TextInput>
                <TextInput placeholder="Senha..." style={formStyle.input}></TextInput>
            </View>
            <View style={formStyle.formExtra}>
                <Text style={formStyle.formExtraText}>Esqueci a senha</Text>
            </View>
            <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" style={[formStyle.button, formStyle.buttonLogar]}>
                <Text>Logar</Text>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" style={[formStyle.button, formStyle.buttonCadastrar]}>
                <Text style={formStyle.buttonCadastrarText}>Cadastrar</Text>
            </TouchableHighlight>
        </View>
    );
}

const style = StyleSheet.create({
    form: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Login;