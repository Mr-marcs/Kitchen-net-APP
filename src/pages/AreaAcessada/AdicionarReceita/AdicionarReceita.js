import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Screen from '@components/screen/screen';
import { Divider } from '@ui-kitten/components';
import HeaderSemBuscar from '@components/HeaderSemBucar/HeaderSemBuscar';
import InfoPrincipal from '@components/AdicionarReceita/InfoPrincipal/InfoPrincipal';
import Ingredientes from '@components/AdicionarReceita/Ingredientes/Ingredientes';
import Categorias from '@components/AdicionarReceita/Categorias/Categorias';
import Porcoes from '@components/AdicionarReceita/Porcoes/Porcoes';
import Etapas from '@components/AdicionarReceita/Etapas/Etapas';
import Enviar from '@components/AdicionarReceita/Enviar/Enviar';

const AdicionarReceita = () => {
    return (
      <ScrollView  style={style.container}>
        <HeaderSemBuscar name="Adicionar receita"/>
        <Screen>
            <InfoPrincipal />
            <Divider />
            <Ingredientes/>
            <Divider />
            <Categorias />
            <Divider />
            <Porcoes />
            <Divider />
            <Etapas />
        </Screen>
        <Enviar />
      </ScrollView>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
    },
});

export default AdicionarReceita;
