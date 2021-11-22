import React from 'react';
import { StyleSheet, View, TouchableOpacity, Touchable } from 'react-native';
import { Text } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';

const ImagemHeader = () => {
  return (
    <View style={style.container}>
        <View style={{alignItems: 'center', paddingTop: 20,}}>
            <Text style={{width: 250, color: '#FFF', textAlign: 'center', fontSize: 24}}>Batata Frita Sequinha e Crocante, Finalizado!!</Text>
            <View style={{ width: '100%', flexDirection: 'row', paddingTop: 20, paddingRight: 10, justifyContent: 'flex-end'}}>
                <TouchableOpacity>
                    <Icon name='hearto' size={24} color="#fff"/>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Icon2 style={{marginLeft: 30}} name="dots-three-vertical" size={24} color="#fff"/>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#E24333',
        height: 150,
    },
});

export default ImagemHeader;