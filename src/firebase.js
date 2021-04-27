import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBGTHnyqQWsTAXqivrMPat0XPV-S8bOsWg",
  authDomain: "disney-clone-f4d8b.firebaseapp.com",
  projectId: "disney-clone-f4d8b",
  storageBucket: "disney-clone-f4d8b.appspot.com",
  messagingSenderId: "332091667147",
  appId: "1:332091667147:web:a66ca1fccfff68b9c8a14e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
export default db;