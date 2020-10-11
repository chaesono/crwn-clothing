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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
