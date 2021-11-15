import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight, Button, ScrollView } from 'react-native';
import Header from '@components/header/header';
import Screen from '@components/screen/screen';
import ReceitaFeed from '@components/ReceitaFeed/ReceitaFeed';

const Feed = () => {
  return (
    <ScrollView style={style.container}>
      <Header name="Feed"/>
      <Screen>
        <ReceitaFeed />
        <ReceitaFeed />
      </Screen>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
  },
});

export default Feed;