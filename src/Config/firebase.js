import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAoMsJKwdGDKzS1coCZW4mVulsmXOlvbvE",
  authDomain: "humble-123.firebaseapp.com",
  projectId: "humble-123",
  storageBucket: "humble-123.appspot.com",
  messagingSenderId: "105852960251",
  appId: "1:105852960251:web:4cc5c8f327e3bc8261df5e",
  measurementId: "G-ZGTG5QHW9J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

// console.log(firebaseApp)
console.log(db);

// console.log(db.collection('contacts'))

export { db, auth };
