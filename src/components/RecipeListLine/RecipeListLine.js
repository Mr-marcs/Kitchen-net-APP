import React, {useState} from 'react';
import { StyleSheet, Dimensions, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Layout, Text, Toggle } from '@ui-kitten/components';
import RecipeList from '@components/RecipeListLine/RecipeList/RecipeList';
import Mais from '@assets/imgs/mais.png';
import Amei from '@assets/imgs/amei.png';
import Minhas from '@assets/imgs/minhas.png';
import Salvos from '@assets/imgs/salvos.png';
import lul from '@assets/imgs/lul.png';
import { Overlay } from 'react-native-elements';

const RecipeListLine = () => {
    return (
        <Layout style={style.container}>
            <CriarListaButton />
            <RecipeList source={Amei} name="Curtidas"/>
            <RecipeList source={Minhas} name="Bookmark"/>
            <RecipeList source={Salvos} name="Minhas receitas"/>
            <RecipeList source={lul} name="Seleção exclusiva dos integrantes do TCC "/>
        </Layout>
    );
}

const CriarListaButton = () => {
    const [visible, setVisible] = useState(false);
    const [nomeLista, setNomeLista] = useState('');
    const [visibilidade, setVisibilidade] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };
    const toggleVisibilidade = () => {
        setVisibilidade(!visibilidade);
    }

    return(
        <View>
            <TouchableOpacity style={styleButton.container} onPress={() => toggleOverlay()}>
                <Image source={Mais} style={styleButton.containerImage}/>
                <Layout style={styleButton.areaTexto}>
                    <Text style={styleButton.titulo}>Criar Lista de receitas</Text>
                </Layout>
            </TouchableOpacity>
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                <View style={styleButton.overlay}>
                    <Text style={{fontSize:18}}>Nome da Lista de Receitas:</Text>
                    <TextInput 
                        style={styleButton.search} 
                        value={nomeLista} 
                        onChangeText={(nextValue) => {
                            setNomeLista(nextValue);
                        }}
                        placeholder="Nome da lista de receitas..."
                    />
                    <View style={{flexDirection: 'row', alignItems:'center', marginTop: 30, justifyContent: 'space-between'}}>
                        <Text style={{fontSize:16}}>Visualização:</Text>
                        <Toggle
                            checked={visibilidade}
                            onChange={toggleVisibilidade}
                        >
                        </Toggle>
                        <Text>{visibilidade ? "Privado" : "Público"}</Text>
                    </View>
                    <TouchableOpacity style={styleButton.button} onPress={toggleOverlay}>
                        <Text style={{color: '#fff'}}>Criar</Text>
                    </TouchableOpacity>
                </View>
            </Overlay>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
});

const width = Dimensions.get("window").width;

const styleButton = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    containerImage:{
        width: width/2-25,
        height: 180,
    },
    areaTexto: {
        width: width/2-25,
        height: 70,
        backgroundColor: '#676767',
        justifyContent: 'center',
    },
    titulo: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
    },
    overlay: {
        padding: 20,
        width: width/1.3,
    },
    search: {
        
        marginTop: 10,
        color: '#000',
        padding: 10,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
    },
    button: {
        backgroundColor: '#F24333',
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
});

export default RecipeListLine;

