import React, {useState} from 'react';
import { StyleSheet, Image, TouchableOpacity, Platform, StatusBar, ScrollView, View, TouchableHighlight } from 'react-native';
import { Layout, Tab, TabView, Text } from '@ui-kitten/components';
import Header from '@components/ReceitaHome/Header/Header';
import ReceitaMenu from '@components/ReceitaHome/ReceitaMenu/ReceitaMenu';
import Descricao from '@components/ReceitaHome/Descricao/Descricao';
import Comentarios from '@components/ReceitaHome/Comentarios/Comentarios';
import { useNavigation } from '@react-navigation/core';

const ReceitaHome = () => {
    const navigation = useNavigation();
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <View style={style.container}>
            <ScrollView>
                <Header />
                <ReceitaMenu />
                <TabView
                    selectedIndex={selectedIndex}
                    onSelect={index => setSelectedIndex(index)}
                >
                    <Tab title="Descrição">
                        <Descricao />
                    </Tab>
                    <Tab title="Comentários">
                        <Comentarios />
                    </Tab>
                </TabView>
            </ScrollView>
            <Layout style={style.comecar}>
                <TouchableOpacity onPress={() => navigation.navigate("Etapa")} style={style.button}>
                    <Text style={style.comecarTexto}>Começar</Text>
                </TouchableOpacity>
            </Layout>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
    },
    comecar: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    comecarTexto: {
        color: '#fff',
        textAlign: 'center',
    },
    button: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 30,
        width: 300,
    },
});

export default ReceitaHome;