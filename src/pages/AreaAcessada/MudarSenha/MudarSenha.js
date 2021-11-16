import React, {useState} from 'react';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Input, Layout, Text } from '@ui-kitten/components';
import formStyle from '@styles/form';
import HeaderGoBack from '@components/HeaderGoBack/HeaderGoBack';

const MudarSenha = () => {
    const [senha, setSenha] = useState('');
    const [senhaNova, setSenhaNova] = useState('');
    const [senhaRepetida, setSenhaRepetida] = useState('');
    return (
        <Layout style={style.container}>
            <HeaderGoBack />
            <Layout style={style.form}>
                <Image 
                    style={formStyle.logo}
                    source={require('@assets/imgs/logo.png')}
                />
                <Layout style={style.input}>
                    <Text>Senha atual:</Text>
                    <Input
                        placeholder='Senha...'
                        value={senha}
                        onChangeText={nextValue => setSenha(nextValue)}
                    />
                </Layout>
                <Layout style={style.input}>
                    <Text>Senha nova:</Text>
                    <Input
                        placeholder='Senha nova...'
                        value={senhaNova}
                        onChangeText={nextValue => setSenhaNova(nextValue)}
                    />
                </Layout>
                <Layout style={style.input}>
                    <Text>Repetir senha nova::</Text>
                    <Input
                        placeholder='Repetir senha nova:...'
                        value={senhaRepetida}
                        onChangeText={nextValue => setSenhaRepetida(nextValue)}
                    />
                </Layout>
                <TouchableHighlight activeOpacity={0.6} underlayColor="#bf3528" style={[formStyle.button, formStyle.buttonCadastrar]} onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={formStyle.buttonCadastrarText}>Salvar</Text>
                </TouchableHighlight>
            </Layout>
        </Layout>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
    },
    input: {
        marginTop: 20,
        width: 300,
    },
    form: {
        alignItems: 'center',
        padding: 25,
    },
});

export default MudarSenha;
