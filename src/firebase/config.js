import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: "smp-app-48efa.firebaseapp.com",
  databaseURL: "https://smp-app-48efa.firebaseio.com",
  projectId: "smp-app-48efa",
  storageBucket: "smp-app-48efa.appspot.com",
  messagingSenderId: "954099285585",
  appId: "1:954099285585:web:469278ad8fd25d339f4270",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//accessing features in firebase
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
