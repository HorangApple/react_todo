import * as firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';

import {firebaseConfig} from './apiKey'

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
export const login = () => (firebase.auth().signInWithPopup(provider))
export const logout = () => (firebase.auth().signOut())
export const setLoginState = (func)=>(firebase.auth().onAuthStateChanged(func))
export const getTodo = (user) => (firebase.firestore().collection("users").doc(user).collection("todos").get())
export const postTodo = (user) => (firebase.firestore().collection("users").doc(user).collection("todos").doc())
export const deleteTodo = (id,user) => (firebase.firestore().collection("users").doc(user).collection("todos").doc(id).delete())
export const changeDone = (id,user,done) => (firebase.firestore().collection("users").doc(user).collection("todos").doc(id).update({done:!done}))