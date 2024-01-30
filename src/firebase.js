import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA4fQCXZ5uyxzn31xNH29FSP-qoFgFql_I",
  authDomain: "uni-chat-a1810.firebaseapp.com",
  projectId: "uni-chat-a1810",
  storageBucket: "uni-chat-a1810.appspot.com",
  messagingSenderId: "86947023465",
  appId: "1:86947023465:web:0a625be9708f851bf7b0f8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = getStorage(firebaseApp);
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, storage };
export default db;
