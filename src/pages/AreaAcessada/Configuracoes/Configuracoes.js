import React, {useState} from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Toggle, Layout, Text } from '@ui-kitten/components';
import HeaderSemBuscar from '@components/HeaderSemBucar/HeaderSemBuscar';
import { TouchableHighlight } from 'react-native-gesture-handler';

const Configuracoes = ({navigation}) => {
    const [darkMode, setDarkMode] = useState(false);
    const onActiveCheckedChange = (isChecked) => {
        setDarkMode(isChecked);
    };

    return (
        <ScrollView style={style.container}>
            <HeaderSemBuscar name="Configurações"/>
                <Layout style={style.config}>
                    <Text>Modo Noturno</Text>
                    <Toggle
                        checked={darkMode}
                        onChange={onActiveCheckedChange}>
                    </Toggle>
                </Layout>
                <TouchableHighlight underlayColor="#ddd" onPress={() => navigation.navigate("EditarPerfil")} style={style.config}>
                    <Text>Editar Perfil</Text>
                </TouchableHighlight>
                <TouchableHighlight underlayColor="#ddd" onPress={() => navigation.navigate("MudarSenha")} style={style.config}>
                    <Text>Mudar Senha</Text>
                </TouchableHighlight>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
    },
    config:{
        borderBottomWidth: 1,
        borderColor: '#000',
        padding: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});

export default Configuracoes;
