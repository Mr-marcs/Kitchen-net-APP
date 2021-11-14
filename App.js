import 'react-native-gesture-handler';
import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from '@src/routes'
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { default as theme } from '@assets/custom-theme.json'; // <-- Import app theme

const Stack = createNativeStackNavigator();

const App = () => {
  let [fontsLoaded] = useFonts({
    Oswald_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  else{
    return (
      <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
        <Routes />
      </ApplicationProvider>
    );
  }
}

export default App;
