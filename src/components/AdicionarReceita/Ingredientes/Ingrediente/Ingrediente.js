import React from 'react';
import { StyleSheet, Image, TouchableHighlight, ScrollView } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';

const Ingrediente = () => {
    return (
      <Layout style={style.container}>
          <Text>Batata-frita</Text>
          <Layout style={style.medida}>
              <Text>300g</Text>
          </Layout>
      </Layout>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 10,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    medida: {
        backgroundColor: '#ddd',
        padding: 5,
        borderRadius: 10,
    },
});

export default Ingrediente;