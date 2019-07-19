import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  // key value
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
export const login = () => (firebase.auth().signInWithPopup(provider))
export const logout = () => (firebase.auth().signOut())
export const setLoginState = (func)=>(firebase.auth().onAuthStateChanged(func))