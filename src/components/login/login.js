import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
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