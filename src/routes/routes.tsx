import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import * as View from '../screens/index';

const { Screen, Navigator } = createStackNavigator();

const Routes: React.FC = () => (
  <Navigator initialRouteName="Register" screenOptions={{ headerShown: false }}>
    <Screen name="Home" component={View.Home} />
    <Screen name="Register" component={View.Register} />
  </Navigator>
);

export default Routes;
