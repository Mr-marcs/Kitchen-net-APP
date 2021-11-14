import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight, Button } from 'react-native';
import Header from '@components/header/header';
import Screen from '@components/screen/screen';

const Feed = () => {
  return (
    <View style={style.container}>
      <Header name="Feed"/>
      <Screen>
      
      </Screen>
    </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
  },
});

export default Feed;