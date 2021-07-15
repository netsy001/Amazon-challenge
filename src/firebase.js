import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPEQQTwpO7pZzu7Pa57ziK8bVifYrKDtU",
  authDomain: "myshop-d68d9.firebaseapp.com",
  projectId: "myshop-d68d9",
  storageBucket: "myshop-d68d9.appspot.com",
  messagingSenderId: "71886357447",
  appId: "1:71886357447:web:05239e362cb8d413e8cfe2",
  measurementId: "G-NESN54FKQE"
};

// initializing the app with firebaseConfig
const firebaseApp = firebase.initializeApp(firebaseConfig);

//initializing the database
//firestore is the real time database in firebase
const db = firebaseApp.firestore();

//this will give us a variable to handle for all signing in
const auth = firebase.auth();

//to use db auth we are exporting to use outside of the file
export { db, auth };