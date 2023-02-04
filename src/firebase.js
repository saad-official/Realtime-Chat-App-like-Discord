import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCGLdjatt180vlKv8EYaAK5_QDvht77rik",
  authDomain: "discord-clone-1e186.firebaseapp.com",
  projectId: "discord-clone-1e186",
  storageBucket: "discord-clone-1e186.appspot.com",
  messagingSenderId: "868667772948",
  appId: "1:868667772948:web:35f7943a4988b584aed701",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = getStorage(firebaseApp);
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, storage };
export default db;
