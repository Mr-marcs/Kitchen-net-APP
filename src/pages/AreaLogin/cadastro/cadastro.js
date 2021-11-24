import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import formStyle from '@styles/form';
import Screen from '@components/screen/screen';
import Global from '@styles/global';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import axios from 'axios';
import { base_url } from '@src/config/base_url.config';

const Cadastro = () => {
    const navigation = useNavigation();
    
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    
    async function handler(){
        
        console.log(email)

        await axios.post(base_url + '/register/user',{
            'username': username,
            'password': password,
            'login': email 
        })
        
        
        navigation.navigate("Confirmacao", {
            mensagem: "Cadastrado com sucesso!",
        })
    }
    
    return (
        <Screen>
            <View style={Global.backButtonView}>
                <TouchableOpacity onPress={() => {navigation.goBack()}}>
                    <Icon name="arrow-back" size={32} color="#000"/>
                </TouchableOpacity>
            </View>
            <View style={style.form}>
                <Image 
                    style={formStyle.logo}
                    source={require('@assets/imgs/logo.png')}
                />
                <Text style={formStyle.titulo}>Cadastro</Text>
                <View style={formStyle.form}>
                    <TextInput placeholder="Nome de Usuário..." style={formStyle.input} value={username} onChangeText={text=>{setUsername(text)}}></TextInput>
                    <TextInput placeholder="Email..." style={formStyle.input} value={password} onChangeText={text=>{setPassword(text)}}></TextInput>
                    <TextInput placeholder="Senha..." style={formStyle.input} value={email} onChangeText={text=>{setEmail(text)}}></TextInput>
                </View>
                <TouchableHighlight 
                    activeOpacity={0.6} 
                    underlayColor="#bf3528" 
                    style={[formStyle.button, formStyle.buttonCadastrar]} 
                    onPress={()=>{handler()}}>
                    <Text style={formStyle.buttonCadastrarText}>Cadastrar</Text>
                </TouchableHighlight>
            </View>
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

export default Cadastro;