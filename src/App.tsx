import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import { ThemeProvider } from 'styled-components/native';

import Theme from './styles/Theme';

import Routes from './routes/routes';

const App: React.FC = () => (
  <ThemeProvider theme={Theme}>
    <NavigationContainer>
      <Routes />
      <StatusBar backgroundColor="#ccc" />
      <FlashMessage position="top" />
    </NavigationContainer>
  </ThemeProvider>
);

export default App;
