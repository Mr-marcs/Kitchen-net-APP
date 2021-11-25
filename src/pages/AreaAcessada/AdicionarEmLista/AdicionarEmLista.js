import React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, Image, View, TouchableWithoutFeedback} from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import HeaderGoBack from '@components/HeaderGoBack/HeaderGoBack';
import { ScrollView } from 'react-native-gesture-handler';
import ListaReceita from '@components/AdicionarEmLista/ListaReceita/ListaReceita';

const AdicionarEmLista = (props) => {
    const {Id, Author} = props.route.params;
    
    const listas = [
        {
            Id: 1,
            Name: 'Lista1',
            Image: 'https://pipe.miroware.io/60a47afdab37f801c2e52bb1/TCC/Listas/lista1.jpg',
        },
        {
            Id: 2,
            Name: 'Lista2',
            Image: 'https://pipe.miroware.io/60a47afdab37f801c2e52bb1/TCC/Listas/lista2.jpg',
        },
    ];
    return (
        <Layout style={style.container}>
            <ScrollView>
                <HeaderGoBack />
                <View style={{paddingTop:10, paddingLeft: 20, paddingRight:20,}}>
                    <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold', marginBottom: 20,}}>Adicionar Receita em:</Text>
                    {
                        listas.map(item => (
                            <ListaReceita name={item.Name} image={item.Image} key={item.Id}/>
                        ))
                    }
                </View>
            </ScrollView>
        </Layout>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default AdicionarEmLista;