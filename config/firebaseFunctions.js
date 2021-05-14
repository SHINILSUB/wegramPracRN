import * as firebase from "firebase";
import "firebase/firestore";
import {
    Alert
} from "react-native";

export async function registration(nickName, email, password) {
    try {
        console.log(nickName, email, password)
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const currentUser = firebase.auth().currentUser;
        console.log(currentUser)
        Alert.alert("회원가입 성공!")
    } catch (err) {
        Alert.alert("무슨 문제가 있는 것 같아요! => ", err.message);
    }
}