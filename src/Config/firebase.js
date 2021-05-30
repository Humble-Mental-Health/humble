import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBbJgQAkr8aXKtV7iFU4zakiQdde0f4jhA",
  authDomain: "humble-ae809.firebaseapp.com",
  projectId: "humble-ae809",
  storageBucket: "humble-ae809.appspot.com",
  messagingSenderId: "210126672721",
  appId: "1:210126672721:web:8adb7e4f1d407ae48ab970",
  measurementId: "G-TY57Y8L85N"
});

var db = firebaseApp.firestore();

export { db };
