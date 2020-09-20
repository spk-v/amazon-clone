import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDw3UHK4SVng01UL4ZczLL_11uBMh3XGXE",
  authDomain: "clone-d0d6b.firebaseapp.com",
  databaseURL: "https://clone-d0d6b.firebaseio.com",
  projectId: "clone-d0d6b",
  storageBucket: "clone-d0d6b.appspot.com",
  messagingSenderId: "626386792173",
  appId: "1:626386792173:web:e02f26d8bc071b415a26e4",
  measurementId: "G-GFY0DJ04MV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
