import React from 'react';
import { Platform } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from 'styled-components';

import * as View from '../screens/index';

const { Screen, Navigator } = createBottomTabNavigator();

const Routes: React.FC = () => {
  const theme = useTheme();

  return (
    <Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: theme.colors.secondary,
        inactiveTintColor: theme.colors.title,
        labelPosition: 'beside-icon',
        style: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 60,
        },
      }}
    >
      <Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
        name="Home"
        component={View.Home}
      />
      <Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="monetization-on" size={size} color={color} />
          ),
        }}
        name="Registros"
        component={View.Register}
      />
      <Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="insights" size={size} color={color} />
          ),
        }}
        name="Resumo"
        component={View.Resume}
      />
    </Navigator>
  );
};

export default Routes;
