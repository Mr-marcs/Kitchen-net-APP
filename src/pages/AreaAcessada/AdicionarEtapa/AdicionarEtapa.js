import { Layout, Input, Text } from '@ui-kitten/components';
import React, {useState} from 'react';
import { StyleSheet, Image, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import Header from '@components/AdicionarEtapa/Header/Header';
import * as ImagePicker from 'expo-image-picker';
import Timer from '@components/AdicionarEtapa/Timer/Timer';
import { ScrollView } from 'react-native-gesture-handler';

const AdicionarEtapa = ({navigation, route}) => {
    const { etapa } = route.params;
    const [image, setImage] = useState(null);
    const [instrucao, setInstrucao] = useState('');

    const addImage = async () => {
        let _image = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1,
        });

        if (!_image.cancelled) {
            setImage(_image.uri);
        }
    };

    return (
      <ScrollView style={style.container}>
        <Header etapa={etapa}/>
        <Text style={style.titulo}>Etapa 1</Text>
        <Layout style={style.containerImage}>
        <Image source={{uri: image}} style={{ height: 300 }} />
        <View style={image ? style.uploadBtnContainer : style.uploadBtnContainer2}>
            <TouchableOpacity onPress={addImage} style={style.uploadBtn} >
                <Text style={style.texto}>+ Edit Image</Text>
            </TouchableOpacity>
        </View>
        </Layout>
        <Layout style={style.containerText}>
        <Text>Instruções da etapa 1:</Text>
        <Input
            placeholder='Diga o que devemos fazer na etapa 1...'
            value={instrucao}
            multiline={true}
            textStyle={{ minHeight: 64 , maxHeight: 64,}}
            onChangeText={nextValue => setInstrucao(nextValue)}
        />
        </Layout>
        <Layout style={style.containerText}>
            <Text>Timer:</Text>
            <Timer />
        </Layout>
        <Layout style={style.containerText}>
        <Text>Dica(opcional):</Text>
        <Input
            placeholder='Dica ou truque para a etapa 1...'
            value={instrucao}
            multiline={true}
            textStyle={{ minHeight: 64 , maxHeight: 64,}}
            onChangeText={nextValue => setInstrucao(nextValue)}
        />
        </Layout>
        <Layout style={style.container2}>
            <TouchableHighlight style={style.button} activeOpacity={0.6} underlayColor="#a7181a" onPress={() => alert('alo')}>
                <Text style={style.texto2}>Enviar</Text>
            </TouchableHighlight>
        </Layout>
      </ScrollView>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
    },
    titulo: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    containerImage: {
        marginTop: 20,
        height:300,
        backgroundColor:'#efefef',
        position:'relative',
        overflow:'hidden',
    },
    texto: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    uploadBtnContainer:{
        opacity:0.9,
        position:'absolute',
        right:0,
        bottom:0,
        backgroundColor:'#F24333',
        width:'100%',
        height:60,
    },
    uploadBtnContainer2:{
        opacity:0.9,
        position:'absolute',
        right:0,
        bottom:0,
        backgroundColor:'#F24333',
        width:'100%',
        height:300,
    },
    uploadBtn:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerText: {
        padding: 20,
    },
    container2:{
        flex: 1,
        height: 80,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: -10,
        },
        shadowOpacity: 0.8,
        shadowColor: '#000000',
        elevation: 9,
    },
    button: {
        height: 45,
        width: 300,
        borderRadius: 25,
        backgroundColor:'#E24333',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#fff',
    },
    texto2: {
        textAlign: 'center',
        color: '#fff'
    },
});

export default AdicionarEtapa;
