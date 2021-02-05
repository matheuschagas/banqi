/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState, useContext, createContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LoginScreen} from './src/screens/LoginScreen';
import {HomeScreen} from './src/screens/HomeScreen';
import {StatementScreen} from './src/screens/StatementScreen';
import {TransactionDetailScreen} from './src/screens/TransactionDetailScreen';
import {DeviceEventEmitter, ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import {COLOR_01} from '@env';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => (
  <Tab.Navigator screenOptions={{tabBarVisible: false}}>
    <Tab.Screen name={'HomeScreen'} component={HomeScreen} />
  </Tab.Navigator>
);

const App: () => React$Node = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const login = () => {
    setLoggedIn(true);
  };

  const logout = () => {
    setLoggedIn(false);
  };

  const loaderOn = () => {
    setLoading(true);
  };
  const loaderOff = () => {
    setLoading(false);
  };
  useEffect(() => {
    DeviceEventEmitter.addListener('login', login);
    DeviceEventEmitter.addListener('logout', logout);
    DeviceEventEmitter.addListener('loaderOn', loaderOn);
    DeviceEventEmitter.addListener('loaderOff', loaderOff);
    return () => {
      DeviceEventEmitter.removeListener('login', login);
      DeviceEventEmitter.removeListener('logout', logout);
      DeviceEventEmitter.removeListener('loaderOn', loaderOn);
      DeviceEventEmitter.removeListener('loaderOff', loaderOff);
    };
  }, []);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator headerMode={'none'}>
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
      {loading && (
        <LoaderContainer>
          <ActivityIndicator size={'large'} color={COLOR_01} />
        </LoaderContainer>
      )}
    </>
  );
};

const LoaderContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  align-items: center;
  justify-content: center;
`;

export default App;
