import React, {useState} from 'react';
import { StyleSheet, TouchableHighlight, ScrollView } from 'react-native';
import Screen from '@components/screen/screen';
import { Layout, Input, Text } from '@ui-kitten/components';
import HeaderSemBuscar from '@components/HeaderSemBucar/HeaderSemBuscar';

const InfoPrincipal = () => {
    const [nomeReceita, setNomeReceita] = useState('');
    const [sobreReceita, setSobreReceita] = useState('');
    return (
        <Layout style={style.container}>
            <Layout style={style.input}>
                <Text>Nome da Receita:</Text>
                <Input
                    placeholder='Ex: Arroz feijão, Frango com batata...'
                    value={nomeReceita}
                    onChangeText={nextValue => setNomeReceita(nextValue)}
                />
            </Layout>
            <Layout style={style.input}>
                <Text>Sobre a Receita:</Text>
                <Input
                    placeholder='Ex: Arroz feijão, Frango com batata...'
                    value={sobreReceita}
                    multiline={true}
                    textStyle={style.multiline}
                    onChangeText={nextValue => setSobreReceita(nextValue)}
                />
            </Layout>
        </Layout>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
    },
    input: {
        marginTop: 10,
        marginBottom: 10,
    },
    multiline: {
        minHeight: 64,
        maxHeight: 64,
    },
});

export default InfoPrincipal;
