import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { Layout, Text, Divider } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';

const RecipeInfo = (props) => {
  return (
    <Layout style={style.container}>
        <Text style={style.titulo}>{props.Titulo}</Text>
        <Layout style={style.info}>
            <Text style={style.infoText}>{props.NumeroEtapas} etapas</Text>
            <Text style={style.infoText}>{props.NumeroPorcao} {(props.NumeroPorcao > 1)? "porções" : "porção"}</Text>
            <Text style={style.infoText}>Dificuldade: {props.Dificuldade}</Text>
        </Layout>
        <Layout style={style.info2}>
            <Layout style={style.row}>
                <Layout style={style.rowText}>
                    <Icon2 name={(props.Laikado)?"heart":"hearto"} size={14} color="#F24333" />
                    <Text style={style.textInfo}>{props.Like}</Text>
                </Layout>
                <Layout style={style.rowText}>
                    <Icon3 name="comment-outline" size={14} color="#000" />
                    <Text style={style.textInfo}>{props.Comment}</Text>
                </Layout>
            </Layout>
            <Icon name="share" color="#000" size={24}/>
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