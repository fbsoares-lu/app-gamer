
import React from 'react';
import { 
  useFonts, 
  OpenSans_400Regular, 
  OpenSans_700Bold 
} from '@expo-google-fonts/open-sans';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Theme from './src/styles/theme';
import { Navigation } from './src/routes/navigation';
import { CartProvider } from './src/hooks/cart';

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
          <CartProvider>
            <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
            <NavigationContainer>
              <Navigation/>
            </NavigationContainer>
          </CartProvider>
      </ThemeProvider>
  );
}
