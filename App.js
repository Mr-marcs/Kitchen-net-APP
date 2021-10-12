import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import Login from './src/components/login/login';

export default function App() {
  return (
    <View style={styles.fundo}>
      <View style={styles.AndroidSafeArea}>
        <Login/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#fff',
  },
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight+15 : 15,
    backgroundColor: 'red',
    paddingLeft: 20,
    paddingRight: 20,
  },
});
