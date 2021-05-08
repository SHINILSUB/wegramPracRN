import React from 'react';
import { StyleSheet, View, Text, Alert, ScrollView } from 'react-native';
import PopupButton from './components/PopupButton';
import data from './data.json';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.contianer}>
      {data.diary.map((content, i) => {
        return (
          <View>
            <Text>{content.title}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});