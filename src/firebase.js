
import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyC0Z0OvIjHZGe4kwxl4K5NfZPL5h3ZZIm8",
    authDomain: "cursodevreactjs.firebaseapp.com",
    databaseURL: "https://cursodevreactjs.firebaseio.com",
    projectId: "cursodevreactjs",
    storageBucket: "cursodevreactjs.appspot.com",
    messagingSenderId: "605510639264"
  };
  firebase.initializeApp(config);

  export const database = firebase.database();
  