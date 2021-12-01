import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfh0HS_3bduN5KNVIVX0r_n5XIAaZxyZ4",
  authDomain: "fir-20247.firebaseapp.com",
  projectId: "fir-20247",
  storageBucket: "fir-20247.appspot.com",
  messagingSenderId: "288288519562",
  appId: "1:288288519562:web:e629c2b462cc1c1eb28473",
  measurementId: "G-M7FSBNLR53"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };