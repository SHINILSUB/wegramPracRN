import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import MainPage from '../pages/MainPage';
import DetailPage from '../pages/DetailPage';
import AddPage from '../pages/AddPage';
import MyPage from '../pages/MyPage';

//스택 네비게이션 라이브러리가 제공해주는 여러 기능이 담겨있는 객체를 사용합니다
//그래서 이렇게 항상 상단에 선언하고 시작하는게 규칙입니다!
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    //위에서 선언한 const Stack = createStackNavigator(); Stack 변수에 들어있는 태그를 꺼내 사용합니다.
    //Stack.Navigator 태그 내부엔 페이지(화면)를 스타일링 할 수 있는 다양한 옵션들이 담겨 있습니다.
    <Stack.Navigator
      screenOptions={{
        //헤더 숨기기
        headerShown: false,
      }}
    >
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