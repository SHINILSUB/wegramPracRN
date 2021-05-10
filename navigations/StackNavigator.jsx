import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import MainPage from '../pages/MainPage';
import DetailPage from '../pages/DetailPage';
import AddPage from '../pages/AddPage';
import MyPage from '../pages/MyPage';
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
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="SignInPage" component={SignInPage} />
      <Stack.Screen name="SignUpPage" component={SignUpPage} />
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="DetailPage" component={DetailPage} />
      <Stack.Screen name="AddPage" component={AddPage} />
      <Stack.Screen name="MyPage" component={MyPage} />
    </Stack.Navigator>
  );
};

export default StackNavigator;