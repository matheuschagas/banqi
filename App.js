/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LoginScreen} from './src/screens/LoginScreen';
import {HomeScreen} from './src/screens/HomeScreen';
import {StatementScreen} from './src/screens/StatementScreen';
import {TransactionDetailScreen} from './src/screens/TransactionDetailScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name={'HomeScreen'} component={HomeScreen} />
  </Tab.Navigator>
);

const App: () => React$Node = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {loggedIn ? (
          <>
            <Stack.Screen name={'HomeTabs'} component={HomeTabs} />
            <Stack.Screen
              name={'StatementScreen'}
              component={StatementScreen}
            />
            <Stack.Screen
              name={'TransactionDetailScreen'}
              component={TransactionDetailScreen}
            />
          </>
        ) : (
          <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
