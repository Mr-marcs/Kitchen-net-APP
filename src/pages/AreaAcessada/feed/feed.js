import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import Header from '@components/header/header';
import Screen from '@components/screen/screen';

const Feed = () => {
    return (
      <View style={style.container}>
        <Header name="Feed"/>
        <Screen>
          <TouchableHighlight underlayColor="#ddd" activeOpacity={1} onPress={() => alert("lol")} style={style.item} >
              <Text>Mais curtidas</Text>
          </TouchableHighlight>
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