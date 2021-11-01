import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDDSzvJg7PwiDUkFce9R2WOxsnWyCkAedw",
  authDomain: "react-bakery.firebaseapp.com",
  projectId: "react-bakery",
  storageBucket: "react-bakery.appspot.com",
  messagingSenderId: "397898577343",
  appId: "1:397898577343:web:2ebd0962c207a106e15d0a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;