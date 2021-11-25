import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, TouchableOpacity, KeyboardAvoidingView, ToastAndroid} from 'react-native';
import formStyle from '@styles/form';
import Screen from '@components/screen/screen';
import axios from 'axios';
import LoadingScreen from '@components/Loading/Screen/LoadingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {base_url} from '@src/config/base_url.config';
import { useNavigation } from '@react-navigation/core';

const Login = ({route}) => {
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const [load,setLoad] = useState(false);
    const navigation = useNavigation();
    
    useEffect(() => {
        if(route.params != undefined){
            setLoad(false);
        }
    });

    async function Login(){
        const showToast = () => {
            ToastAndroid.show("Erro em conectar com o sistema", ToastAndroid.LONG);
        };
        const showToast2 = () => {
            ToastAndroid.show("Insira as credenciais corretas!", ToastAndroid.LONG);
        };
        setLoad(true);
        
        try{
            const response = await axios.post(base_url + '/validate',{
                login: username,
                password: password
            })
            
            if(response.data.validated){ 
                await AsyncStorage.setItem('token',response.data.token)
                setUsername('');
                setPassword('');
                navigation.navigate("AreaAcessada")
            }
            
            else {
                showToast2();
                setLoad(false);
            };
        }
        catch(err) {
            showToast();
            setLoad(false)
            console.log(err);
        }
    }
    return (
        <>
        {(!load)?(
        <Screen>
            <KeyboardAvoidingView style={style.form}>
                <Image 
                    style={formStyle.logo}
                    source={require('@assets/imgs/logo.png')}
                />
                <Text style={formStyle.titulo}>Login</Text>
                <View style={formStyle.form}>
                    <TextInput placeholder="Email..." style={formStyle.input} onChangeText={(text)=>{setUsername(text)}} value={username}></TextInput>
                    <TextInput placeholder="Senha..." style={formStyle.input} onChangeText={(text)=>{setPassword(text)}} value={password} secureTextEntry></TextInput>
                </View>
                <View style={formStyle.formExtra}>
                    <TouchableOpacity onPress={() => {navigation.navigate("EsqueceuSenha")}}>
                        <Text style={formStyle.formExtraText}>Esqueci a senha</Text>
                    </TouchableOpacity>
                </View>
                <TouchableHighlight onPress={()=>{Login()}} activeOpacity={0.6} underlayColor="#DDDDDD" style={[formStyle.button, formStyle.buttonLogar]}>
                    <Text>Logar</Text>
                </TouchableHighlight>
                <TouchableHighlight activeOpacity={0.6} underlayColor="#bf3528" style={[formStyle.button, formStyle.buttonCadastrar]} onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={formStyle.buttonCadastrarText}>Cadastrar</Text>
                </TouchableHighlight>
            </KeyboardAvoidingView>
        </Screen>
        )
        :
        <LoadingScreen/>
        }
        </>
        
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