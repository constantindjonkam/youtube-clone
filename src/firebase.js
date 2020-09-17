import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  // your firebase config here
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
