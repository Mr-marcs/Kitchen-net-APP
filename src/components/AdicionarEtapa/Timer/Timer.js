import { Layout, Text } from '@ui-kitten/components';
import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';

const Timer = () => {
    const [segundos, setSegundos] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [horas, setHoras] = useState(0);

    const formatar = (props) => {
        return props > 9 ? "" + props: "0" + props;
    }

    const addHora = () => {
        if(horas == 24){
            setHoras(0);
        }
        else{
            setHoras(horas + 1);
        }
    }
    const removeHora = () => {
        if(horas == 0){
            setHoras(24);
        }
        else{
            setHoras(horas - 1);
        }
    }
    const addMinuto = () => {
        if(minutos == 59){
            setMinutos(0);
        }
        else{
            setMinutos(minutos + 1);
        }
    }
    const removeMinuto = () => {
        if(minutos == 0){
            setMinutos(59);
        }
        else{
            setMinutos(minutos - 1);
        }
    }
    const addSegundo = () => {
        if(segundos == 59){
            setSegundos(0);
        }
        else{
            setSegundos(segundos + 1);
        }
    }
    const removeSegundo = () => {
        if(segundos == 0){
            setSegundos(59);
        }
        else{
            setSegundos(segundos - 1);
        }
    }

    return (
        <Layout style={style.container}>
            <Layout style={style.unidade}>
                <TouchableOpacity onPress={addHora}>
                    <Icon name="chevron-thin-up" size={30} color="#000"/>
                </TouchableOpacity>
                <Text style={style.time}>
                    {formatar(horas)}
                </Text>
                <TouchableOpacity onPress={removeHora}>
                    <Icon name="chevron-thin-down" size={30} color="#000"/>
                </TouchableOpacity>
            </Layout>
            <Text style={style.time}>:</Text>
            <Layout style={style.unidade}>
                <TouchableOpacity onPress={addMinuto}>
                    <Icon name="chevron-thin-up" size={30} color="#000"/>
                </TouchableOpacity>
                <Text style={style.time}>
                    {formatar(minutos)}
                </Text>
                <TouchableOpacity onPress={removeMinuto}>
                    <Icon name="chevron-thin-down" size={30} color="#000"/>
                </TouchableOpacity>
            </Layout>
            <Text style={style.time}>:</Text>
            <Layout style={style.unidade}>
                <TouchableOpacity onPress={addSegundo}>
                    <Icon name="chevron-thin-up" size={30} color="#000"/>
                </TouchableOpacity>
                <Text style={style.time}>
                    {formatar(segundos)}
                </Text>
                <TouchableOpacity onPress={removeSegundo}>
                    <Icon name="chevron-thin-down" size={30} color="#000"/>
                </TouchableOpacity>
            </Layout>
        </Layout>
    );
}

const style = StyleSheet.create({ 
    container:{
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    time: {
        fontSize: 60,
    },
    unidade: {
        alignItems: 'center',
    }
});

export default Timer;
