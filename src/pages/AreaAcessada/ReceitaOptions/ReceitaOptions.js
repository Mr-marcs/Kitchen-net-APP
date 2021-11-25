import React, {useState} from 'react';
import { StyleSheet, ImageBackground, Dimensions, Image, View, TouchableWithoutFeedback} from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import HeaderGoBack from '@components/HeaderGoBack/HeaderGoBack';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { useNavigation } from '@react-navigation/core';
import { Overlay } from 'react-native-elements';
const width = Dimensions.get("window").width;

const ReceitaOptions = (props) => {
    const navigation = useNavigation();
    const receita = props.route.params;
    const [visible, setVisible] = useState(false);
    
    const toggleOverlay = () => {
        setVisible(!visible);
    };

    return (
        <Layout style={style.container}>
            <ScrollView>
                <HeaderGoBack/>
                <View style={{alignItems: 'center', padding: 20}}>
                    <Image source={{uri:receita.Imagem}} style={{width: 150, height: 150}}/>
                    <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 10, textAlign: 'center'}}>{receita.Nome}</Text>
                    <Text>by: {receita.RecipeAuthor}</Text>
                </View>
                <TouchableWithoutFeedback onPress={() => alert('lol')}>
                    <View style={{marginTop: 10, padding: 20,}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
                            <Icon name="hearto" size={24} color="#000" />
                            <Text style={{fontSize: 18, marginLeft: 20}}>Curtir</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <View style={{alignItems: 'center'}}>
                    <Divider style={{width: '80%'}}/>
                </View>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("AdicionarEmLista", { Id: receita.RecipeId, Author: receita.RecipeAuthor})}>
                    <View style={{marginTop: 10, padding: 20,}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
                            <Icon2 name="add-to-list" size={24} color="#000" />
                            <Text style={{ marginLeft: 20}}>Adicionar à lista de receitas</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                {/*<View style={{alignItems: 'center'}}>
                    <Divider style={{width: '80%'}}/>
                </View>
                <TouchableWithoutFeedback onPress={toggleOverlay}>
                    <View style={{marginTop: 10, padding: 20,}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
                            <Icon2 name="megaphone" size={24} color="#000" />
                            <Text style={{fontSize: 18, marginLeft: 20}}>Denunciar</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            <Overlay visible={visible} onBackdropPress={toggleOverlay}>
                <Layout style={style.overlay}>

                </Layout>
            </Overlay>*/}
            </ScrollView>
        </Layout>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    overlay: {
        padding: 20,
        width: width/1.3,
    },
});

export default ReceitaOptions;
