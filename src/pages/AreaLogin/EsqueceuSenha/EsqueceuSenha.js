import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, TouchableOpacity, KeyboardAvoidingView, StatusBar, Platform } from 'react-native';
import formStyle from '@styles/form';
import Screen from '@components/screen/screen';
import { useNavigation } from '@react-navigation/core';
import Global from '@styles/global';
import Icon from 'react-native-vector-icons/Ionicons';

const EsqueceuSenha = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigation = useNavigation();

    return (
        <View style={{flex: 1}}>
            <Screen>
                <KeyboardAvoidingView style={style.form}>
                    <Image 
                        style={formStyle.logo}
                        source={require('@assets/imgs/logo.png')}
                    />
                    <Text style={formStyle.titulo}>Esqueceu Senha</Text>
                    <View style={formStyle.form}>
                        <TextInput 
                            placeholder="Email..." 
                            style={formStyle.input}>
                        </TextInput>
                    </View>
                    <TouchableHighlight activeOpacity={0.6} underlayColor="#bf3528" style={[formStyle.button, formStyle.buttonCadastrar]} onPress={() => navigation.navigate('EsqueceuSenhaConfirmacao')}>
                        <Text style={formStyle.buttonCadastrarText}>Enviar</Text>
                    </TouchableHighlight>
                </KeyboardAvoidingView>
            </Screen>
            <View style={{position: 'absolute', paddingTop: Platform.OS === "android" ? StatusBar.currentHeight+15 : 15, left: 30}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="md-arrow-back" size={24} color="#000"/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    form: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default EsqueceuSenha;