import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Layout, Text, Avatar } from '@ui-kitten/components';
import pfp from '@assets/imgs/pfp.jpg';

const PersonalInfo = () => {
    return (
      <Layout style={style.container}>
          <Image source={pfp} style={style.pfp}/>
          <Text style={style.titulo}>Pedro H. Santos Andrade</Text>
          <Layout style={style.row}>
              <Layout style={style.center}>
                <Text style={style.infoPrincipal}>10k</Text>
                <Text style={style.info}>Seguidores</Text>
              </Layout>
              <Layout style={style.center}>
                <Text style={style.infoPrincipal}>60</Text>
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
    pfp: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 10,
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
