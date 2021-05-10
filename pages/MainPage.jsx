import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {
  Container,
} from 'native-base';

import HeaderComponent from '../components/HeaderComponent';
import CardComponent from '../components/CardComponent';
const data = require('../data.json');
export default function MainPage({ navigation }) {
  return (
    <Container>
      <HeaderComponent />
      <CardComponent />
    </Container>
  );
}

const styles = StyleSheet.create({});