import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB2HJjdhP0WM6dsQr60lL0Mrqed8-deybo",
  authDomain: "crwn-db-b6085.firebaseapp.com",
  databaseURL: "https://crwn-db-b6085.firebaseio.com",
  projectId: "crwn-db-b6085",
  storageBucket: "crwn-db-b6085.appspot.com",
  messagingSenderId: "274824889940",
  appId: "1:274824889940:web:b1ec9991d02033f021cfc1",
  measurementId: "G-N5RME01V34",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
