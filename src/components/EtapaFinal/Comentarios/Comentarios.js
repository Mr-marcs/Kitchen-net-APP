import React, {useState} from 'react';
import { StyleSheet, View, Image, TouchableOpacity, StatusBar, Platform } from 'react-native';
import { Layout, Text, Avatar, Input } from '@ui-kitten/components';
import pfp from '@assets/imgs/pfp.jpg';
import Comentario from '@components/EtapaFinal/Comentarios/Comentario/Comentario';

const Comentarios = () => {
  const [comentario, setComentario] = useState('');
  return (
    <View style={style.container}>
      <Text style={style.titulo}>3 Comentários:</Text>
      <Layout style={style.containerComentario}>
        <Avatar source={pfp} size="large"/>
        <Input
            placeholder='Adicionar Comentário...'
            value={comentario}
            onChangeText={nextValue => setComentario(nextValue)}
            style={{flex: 1, marginLeft: 10,}}
        />
      </Layout>
      <Comentario />
      <Comentario />
      <Comentario />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    paddingBottom: 100,
  },
  titulo:{
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
  },
  containerComentario: {
      flexDirection: 'row',
      alignItems: 'center',
  },
});

export default Comentarios;