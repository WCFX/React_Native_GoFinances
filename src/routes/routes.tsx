import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { xColors } from '../styles';

import * as View from '../screens/index';

const { Screen, Navigator } = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Navigator
      initialRouteName="Preload"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Preload" component={View.Preload} />
      <Screen name="Home" component={View.Home} />
      <Screen name="Quiz" component={View.Quiz} />
      <Screen name="Resume" component={View.Resume} />
      <Screen name="Main" component={View.Main} />
      <Screen
        options={{
          headerShown: true,
          title: '',
          headerStyle: {
            backgroundColor: `${xColors.blue_light}`,
            shadowColor: 'transparent',
          },
        }}
        name="PlantDetail"
        component={View.PlantDetail}
      />
      <Screen name="MyPlants" component={View.MyPlants} />
    </Navigator>
  );
};

export default Routes;
