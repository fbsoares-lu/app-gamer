import React from 'react';
import { 
  useFonts, 
  OpenSans_400Regular, 
  OpenSans_700Bold 
} from '@expo-google-fonts/open-sans';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import Theme from './src/styles/theme';
import {Home} from './src/screen/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular, 
    OpenSans_700Bold 
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }
  
  return (
    <ThemeProvider theme={Theme}>
      <Home />
    </ThemeProvider>
  );
}
