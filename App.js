import 'react-native-gesture-handler';
import React from 'react';
import {
  useFonts,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import Routes from '@src/routes'
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { default as themeCustom } from '@assets/custom-theme.json'; // <-- Import app theme
import LoadingScreen from '@components/Loading/Screen/LoadingScreen';
import { ThemeContext } from './theme-context';

export default () => {
  const [theme, setTheme] = React.useState('light');

  const ToggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  let [fontsLoaded] = useFonts({
    Oswald_400Regular,
  });
  if (!fontsLoaded) {
    return <LoadingScreen />;
  }
  else{
    return (
      <>
        <ThemeContext.Provider value={{theme, ToggleTheme}}>
          <ApplicationProvider {...eva} theme={{...eva[theme], ...themeCustom}}>
            <Routes />
          </ApplicationProvider>
        </ThemeContext.Provider>
      </>
    );
  }
}
