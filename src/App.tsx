import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import { ThemeProvider } from 'styled-components/native';

import Theme from './styles/Theme';

import { AuthProvider } from './hooks/Auth';
import Routes from './routes/routes';

const App: React.FC = () => (
  <ThemeProvider theme={Theme}>
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>

      <StatusBar backgroundColor={`${Theme.colors.primary}`} />
      <FlashMessage position="top" />
    </NavigationContainer>
  </ThemeProvider>
);

export default App;
