import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function SignInPage({ navigation }) {
  const goSignUp = () => {
    navigation.navigate('SignUpPage');
  };
  return (
    <View style={styles.contianer}>
      <Text> SignInPage </Text>
      <TouchableOpacity onPress={goSignUp}>
        <Text>회원가입 하러가기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});