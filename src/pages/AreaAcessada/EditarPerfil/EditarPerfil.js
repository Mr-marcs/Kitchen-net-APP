import React, {useState} from 'react';
import { StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
import { Input, Layout, Text } from '@ui-kitten/components';
import formStyle from '@styles/form';
import UploadImage from '@components/UploadImage/UploadImage';
import HeaderGoBack from '@components/HeaderGoBack/HeaderGoBack';

const EditarPerfil = () => {
    const [nome, setNome] = useState('');
    return (
        <Layout style={style.container}>
            <HeaderGoBack />
            <Layout style={style.form}>
                <UploadImage />
                <Layout style={style.input}>
                    <Text>Nome:</Text>
                    <Input
                        placeholder='Nome...'
                        value={nome}
                        onChangeText={nextValue => setNome(nextValue)}
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
        padding: 30,
    },
});

export default EditarPerfil;
