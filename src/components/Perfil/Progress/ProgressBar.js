import React from 'react';
import { StyleSheet, Image, TouchableHighlight, ScrollView } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import * as Progress from 'react-native-progress';

const ProgressBar = (props) => {
    return (
      <Layout style={style.container}>
            <Text style={style.lvl}>LVL: {props.Level}</Text>
            <Layout style={style.containerProgress}>
                <Progress.Bar progress={props.Atual / (props.Proximo + props.Atual)} width={300} height={20} color="#F24333" borderRadius={20} />
                <Text style={style.progresso}>{props.Atual}/{props.Proximo + props.Atual}</Text>
            </Layout>
      </Layout>
    );
}

const style = StyleSheet.create({
    progresso: {
        position: 'relative',
        top: -22,
    },
    container: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    containerProgress:{
        flex: 1,
        alignItems: 'center',
    },
    lvl: {
        marginLeft: 10,
        marginBottom: 10,
    },
});

export default ProgressBar;
