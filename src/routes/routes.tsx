import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import * as View from '../screens/index';

const { Screen, Navigator } = createStackNavigator();

const Routes: React.FC = () => (
  <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
    <Screen name="Home" component={View.Home} />
  </Navigator>
);

export default Routes;
