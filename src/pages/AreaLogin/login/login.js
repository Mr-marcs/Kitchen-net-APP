import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, TouchableOpacity} from 'react-native';
import formStyle from '@styles/form';
import Screen from '@components/screen/screen';
import axios from 'axios';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {base_url} from '@src/config/base_url.config';

const Login = ({ navigation }) => {
    
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const [load,setLoad] = useState(false);
    async function Login(){
        setLoad(true);
        console.log("oi");
        try{
            const response = await axios.post(base_url + '/validate',{
                login: username,
                password: password
            })
            console.log(response.data)
            if(response.data.validated){ 
                await AsyncStorage.setItem('token',response.data.token)
                navigation.navigate("AreaAcessada")
            }
            
            else {
                setLoad(false);
            };
        }
        catch(err) {
            setLoad(false)
            console.log(err);
        }
    }

    return (
        <>
        {(!load)?(
        <Screen>
            <View style={style.form}>
                <Image 
                    style={formStyle.logo}
                    source={require('@assets/imgs/logo.png')}
                />
                <Text style={formStyle.titulo}>Login</Text>
                <View style={formStyle.form}>
                    <TextInput placeholder="Email..." style={formStyle.input} onChangeText={(text)=>{setUsername(text)}} value={username}></TextInput>
                    <TextInput placeholder="Senha..." style={formStyle.input} onChangeText={(text)=>{setPassword(text)}} value={password}></TextInput>
                </View>
                <View style={formStyle.formExtra}>
                    <TouchableOpacity onPress={() => {alert('Pressed!')}}>
                        <Text style={formStyle.formExtraText}>Esqueci a senha</Text>
                    </TouchableOpacity>
                </View>
                <TouchableHighlight onPress={()=>{Login()}} activeOpacity={0.6} underlayColor="#DDDDDD" style={[formStyle.button, formStyle.buttonLogar]}>
                    <Text>Logar</Text>
                </TouchableHighlight>
                <TouchableHighlight activeOpacity={0.6} underlayColor="#bf3528" style={[formStyle.button, formStyle.buttonCadastrar]} onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={formStyle.buttonCadastrarText}>Cadastrar</Text>
                </TouchableHighlight>
            </View>
        </Screen>
        )
        :
        <AppLoading/>
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