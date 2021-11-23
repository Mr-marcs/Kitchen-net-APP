import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import formStyle from '@styles/form';
import Screen from '@components/screen/screen';
import { useNavigation } from '@react-navigation/core';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigation = useNavigation();

    return (
        <Screen>
            <KeyboardAvoidingView style={style.form}>
                <Image 
                    style={formStyle.logo}
                    source={require('@assets/imgs/logo.png')}
                />
                <Text style={formStyle.titulo}>Login</Text>
                <View style={formStyle.form}>
                    <TextInput 
                        placeholder="Email..." 
                        style={formStyle.input}>
                    </TextInput>
                    <TextInput placeholder="Senha..." style={formStyle.input} secureTextEntry></TextInput>
                </View>
                <View style={formStyle.formExtra}>
                    <TouchableOpacity onPress={() => {navigation.navigate("EsqueceuSenha")}}>
                        <Text style={formStyle.formExtraText}>Esqueci a senha</Text>
                    </TouchableOpacity>
                </View>
                <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" style={[formStyle.button, formStyle.buttonLogar]} onPress={() => navigation.navigate("AreaAcessada")}>
                    <Text>Logar</Text>
                </TouchableHighlight>
                <TouchableHighlight activeOpacity={0.6} underlayColor="#bf3528" style={[formStyle.button, formStyle.buttonCadastrar]} onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={formStyle.buttonCadastrarText}>Cadastrar</Text>
                </TouchableHighlight>
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

export default Login;