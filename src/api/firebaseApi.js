import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
// add key
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
export const login = firebase.auth().signInWithPopup(provider)
export const logout = firebase.auth().signOut()