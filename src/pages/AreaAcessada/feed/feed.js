import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from '@components/header/header';
import { ScrollView } from 'react-native-gesture-handler';

const Feed = () => {
    return (
      <View style={style.container}>
        <Header name="Feed"/>
        
      </View>
    );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
  },
});

export default Feed;