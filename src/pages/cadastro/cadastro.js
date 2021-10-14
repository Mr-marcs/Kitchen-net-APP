import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import formStyle from '@styles/form';
import Screen from '@components/screen';
import Global from '@styles/global';
import Icon from 'react-native-vector-icons/Ionicons';

const Cadastro = ({navigation}) => {
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
                    <TextInput placeholder="Nome de Usuário..." style={formStyle.input}></TextInput>
                    <TextInput placeholder="Email..." style={formStyle.input}></TextInput>
                    <TextInput placeholder="Senha..." style={formStyle.input}></TextInput>
                </View>
                <TouchableHighlight activeOpacity={0.6} underlayColor="#bf3528" style={[formStyle.button, formStyle.buttonCadastrar]} onPress={() => alert('Pressed!')}>
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