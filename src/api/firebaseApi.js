import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { firebaseConfig } from "./apiKey";

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
const firestore = user =>
  firebase
    .firestore()
    .collection("users")
    .doc(user)
    .collection("todos");
export const login = () => firebase.auth().signInWithPopup(provider);
export const logout = () => firebase.auth().signOut();
export const setLoginState = func => firebase.auth().onAuthStateChanged(func);
export const getTodos = user => firestore(user).get();
export const getTodoId = user => firestore(user).doc().id;
export const postTodo = (user,id) => firestore(user).doc(id);
export const deleteTodo = (user,id) =>
  firestore(user)
    .doc(id)
    .delete().then(e=>{console.log(e)});
export const changeDone = (id, user) =>
  firestore(user)
    .doc(id)
    .get()
    .then(response => {
      let done = response.data().done
      firestore(user).doc(id).update({ done: !done });
    })
