import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { Layout, Text, Divider } from '@ui-kitten/components';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';

const RecipeInfo = () => {
  return (
    <Layout style={style.container}>
        <Text style={style.titulo}>Titulo</Text>
        <Layout style={style.info}>
            <Text style={style.infoText}>6 Etapas</Text>
            <Text style={style.infoText}>1 Porção</Text>
            <Text style={style.infoText}>Nível Fácil</Text>
        </Layout>
        <Layout style={style.info2}>
            <Layout style={style.row}>
                <Layout style={style.rowText}>
                    <Icon2 name="hearto" size={14} color="#F24333" />
                    <Text style={style.textInfo}>500</Text>
                </Layout>
                <Layout style={style.rowText}>
                    <Icon3 name="comment-outline" size={14} color="#000" />
                    <Text style={style.textInfo}>13</Text>
                </Layout>
            </Layout>
        </Layout>
        <Divider />
    </Layout>
  );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 10,
  },
  titulo: {
    fontSize: 24,
  },
  info: {
      marginTop: 6,
      flexDirection: 'row',
  },
  infoText: {
      color: '#747474',
      marginRight: 20,
      fontSize: 12,
  },
  info2:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15,
      marginBottom: 20,
  },
  row: {
      flexDirection: 'row',
  },
  rowText:{
      flexDirection: 'row',
      marginRight: 20,
      alignItems: 'center',
  },
  textInfo: {
      marginLeft: 5,
  },
});

export default RecipeInfo;