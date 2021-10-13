import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import Cadastro from '@pages/cadastro/cadastro';

export default function App() {
  let [fontsLoaded] = useFonts({
    Oswald_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  else{
    return (
      <View style={styles.fundo}>
        <View style={styles.AndroidSafeArea}>
          <Cadastro />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'Oswald_400Regular',
  },
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight+15 : 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
