import React, { useState } from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import { Grid } from 'react-native-easy-grid';
import {
  Container,
  Content,
  Text,
  Button,
  Item,
  Input,
  Form,
  Textarea,
} from 'native-base';
import HeaderComponent from '../components/HeaderComponent';
const background2 = require('../assets/background2.png');

import * as firebase from 'firebase';
import 'firebase/firestore';

import { addDiary } from '../config/firebaseFunctions';

const tempImage =
  'https://firebasestorage.googleapis.com/v0/b/sparta-study-plus.appspot.com/o/lecture%2F6-min.png?alt=media&token=bbc87679-4084-40ad-b6cd-01e808983fa4';

export default function AddPage() {
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');

  const [content, setContent] = useState('');
  const [contentError, setContentError] = useState('');

  const [image, setImage] = useState(tempImage);

  const upload = async () => {
    console.log('업로드 준비중!');
    const currentUser = firebase.auth().currentUser;
    let date = new Date();
    let data = {
      title: title,
      author: currentUser.email,
      desc: content,
      image: image,
      date: date.getTime(),
      uid: currentUser.uid,
    };

    let result = addDiary(data);
    if (result) {
      Alert('글이 성공적으로 등록되었습니다!');
    }
  };

  return (
    <Container>
      <HeaderComponent />
      <Content>
        <Image
          source={background2}
          style={{ width: '95%', height: 100, borderRadius: 10 }}
        />
        <Grid style={styles.imageUpload}>
          <Text style={styles.imageUploadPlus}>+</Text>
        </Grid>
        <Item regular style={styles.title}>
          <Input
            placeholder="다이어리 제목을 입력해주세요!"
            style={{ fontSize: 13 }}
            onChangeText={(text) => setTitle(text)}
          />
        </Item>
        <Form style={styles.contentLayout}>
          <Textarea
            rowSpan={5}
            bordered
            placeholder="내용을 입력해주세요"
            style={styles.content}
            onChangeText={(text) => setContent(text)}
          />
        </Form>
        <Button full style={styles.uploadButton} onPress={() => upload()}>
          <Text>등록</Text>
        </Button>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  imageUpload: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'grey',
    borderStyle: 'dashed',
    width: '90%',
    height: 200,
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
  },
  imageUploadPlus: {
    textAlign: 'center',
    width: '100%',
    fontSize: 90,
    fontWeight: '300',
    color: 'grey',
  },
  title: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  contentLayout: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
  content: { borderRadius: 10, fontSize: 13 },
  uploadButton: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: 'pink',
  },
});