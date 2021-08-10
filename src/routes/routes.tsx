import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as View from '../screens/index';

const { Screen, Navigator } = createBottomTabNavigator();

const Routes: React.FC = () => (
  <Navigator initialRouteName="Home">
    <Screen name="Home" component={View.Home} />
    <Screen name="Register" component={View.Register} />
    <Screen name="CategorySelect" component={View.CategorySelect} />
  </Navigator>
);

export default Routes;
