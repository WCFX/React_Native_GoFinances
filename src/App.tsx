import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';

import { xColors } from './styles';

import Routes from './routes/routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Routes />
      <StatusBar backgroundColor={`${xColors.green}`} />
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
