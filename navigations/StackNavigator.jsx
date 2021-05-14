import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import DetailPage from '../pages/DetailPage';

import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    
    <Stack.Navigator
      screenOptions={{
        //헤더 숨기기
        headerShown: false,
      }}
    >

      <Stack.Screen name="SignInPage" component={SignInPage} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="SignUpPage" component={SignUpPage} />
      <Stack.Screen name="DetailPage" component={DetailPage} />
    </Stack.Navigator>
  );
};

export default StackNavigator;