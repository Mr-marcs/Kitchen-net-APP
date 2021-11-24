import React, {useEffect, useState} from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Toggle, Layout, Text } from '@ui-kitten/components';
import HeaderSemBuscar from '@components/HeaderSemBucar/HeaderSemBuscar';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { ThemeContext } from '../../../../theme-context';

const Configuracoes = ({navigation}) => {
    const [darkMode, setDarkMode] = useState(false);
    const onActiveCheckedChange = (isChecked) => {
        setDarkMode(isChecked);
    };
    const themeContext = React.useContext(ThemeContext);

    useEffect(() => {
        setDarkMode(themeContext.theme == 'light' ? false : true);
    });

    return (
        <Layout style={style.container}>
            <ScrollView>
            <HeaderSemBuscar name="Configurações"/>
                <Layout style={style.config}>
                    <Text>Modo Noturno</Text>
                    <Toggle
                        checked={darkMode}
                        onChange={onActiveCheckedChange, themeContext.ToggleTheme}>
                    </Toggle>
                </Layout>
                <Layout>
                    <TouchableHighlight underlayColor="rgba(0, 0, 0, 0.5)" onPress={() => navigation.navigate("EditarPerfil")} style={style.config}>
                        <Text>Editar Perfil</Text>
                    </TouchableHighlight>
                </Layout>
                <Layout>
                    <TouchableHighlight underlayColor="rgba(0, 0, 0, 0.5)" onPress={() => navigation.navigate("MudarSenha")} style={style.config}>
                        <Text>Mudar Senha</Text>
                    </TouchableHighlight>
                </Layout>
                <Layout>
                    <TouchableHighlight underlayColor="rgba(0, 0, 0, 0.5)" onPress={() => navigation.navigate("Login", {logged: false})} style={style.config}>
                        <Text>Sair</Text>
                    </TouchableHighlight>
                </Layout>
            </ScrollView>
        </Layout>
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
