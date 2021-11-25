import React, { useState,useEffect} from 'react';
import { StyleSheet, Image } from 'react-native';
import { Layout, Text, Avatar } from '@ui-kitten/components';
import PfpBigImage from '@components/pfpBigImage/pfpBigImage';
import { set } from 'react-native-reanimated';
import LoadingComponent from '@components/Loading/Component/LoadingComponent';

const PersonalInfo = (props) => {

    return (
      <Layout style={style.container}>
          <PfpBigImage Id={props.Id}/>
          <Text style={style.titulo}>{props.Nome}</Text>
          <Layout style={style.row}>
              <Layout style={style.center}>
                <Text style={style.infoPrincipal}>{props.Seguidores}</Text>
                <Text style={style.info}>Seguidores</Text>
              </Layout>
              <Layout style={style.center}>
                <Text style={style.infoPrincipal}>{props.Seguindo}</Text>
                <Text style={style.info}>Seguindo</Text>
              </Layout>
          </Layout>
      </Layout>
    );
}

const style = StyleSheet.create({
    container:{
        marginTop: 20,
        flex: 1,
        alignItems: 'center',
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    row: {
        backgroundColor: 'red',
        flexDirection: 'row',
    },
    center: {
        alignItems: 'center',
        padding: 20,
    },
    infoPrincipal: {
        fontSize: 20,
    },
    info: {
        fontSize: 12,
    },
});

export default PersonalInfo;
