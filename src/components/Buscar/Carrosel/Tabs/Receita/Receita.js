import React, { useState } from 'react';
import { TouchableWithoutFeedback, View, Image, TouchableOpacity } from 'react-native';
import { Text, Avatar, Layout } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import pfp from '@assets/imgs/pfp.jpg';
const imagencategoria = {uri: 'https://i2.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food-1024x683.jpg'};
import { Divider } from 'react-native-elements';

const Header = (props) => {
    const Verified = (props) => {
        if (props.verified){
            return(
                <Icon2 name="verified" size={28} color="#04a4f4" />
            );
        }
        else{
            return(null);
        }
    }
    return(
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row'}}>
                <Avatar source={pfp} size="large"/>
                <View style={{marginLeft: 10, justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 18 }}>TCC_Vitor_Ferreira</Text>
                    <Text style={{fontSize: 12, color: '#818181'}}>2 semanas atrás</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Verified verified={props.verified}/>
                <TouchableOpacity>
                    <Icon name="dots-vertical" size={24} color="#000"  style={{marginLeft: 10,}}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const Receita = (props) => {
    const navigation = useNavigation();
    return(
        <View style={{marginTop: 20,}}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("ReceitaHome")}>
                <View>
                    <Header verified={props.verified}/>
                    <Image source={imagencategoria} style={{height: 300, marginTop: 20}}/>
                    <View style={{marginTop: 20, marginBottom: 20}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Hamburger louko maluko</Text>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <Text style={{color: '#818181', fontSize: 12, marginRight: 20}}>6 Etapas</Text>
                            <Text style={{color: '#818181', fontSize: 12, marginRight: 20}}>1 Porção</Text>
                            <Text style={{color: '#818181', fontSize: 12, marginRight: 20}}>Nível Intermediário</Text>
                        </View>
                        <Layout style={{marginTop: 10, flexDirection: 'row'}}>
                            <Layout style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Icon3 name="hearto" size={14} color="#F24333" />
                                <Text style={{marginLeft: 10}}>500</Text>
                            </Layout>
                            <Layout style={{flexDirection: 'row', alignItems: 'center', marginLeft: 20}}>
                                <Icon name="comment-outline" size={14} color="#000" />
                                <Text style={{marginLeft: 10}}>13</Text>
                            </Layout>
                        </Layout>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <Divider width={1}/>
        </View>
    );    
}

export default Receita;