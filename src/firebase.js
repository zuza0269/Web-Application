import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/storage'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAaeJL6GMQZMu4pkGBzwRD5AhDe66PSSGM",
    authDomain: "web-app-279b3.firebaseapp.com",
    databaseURL: "https://web-app-279b3.firebaseio.com",
    projectId: "web-app-279b3",
    storageBucket: "web-app-279b3.appspot.com",
    messagingSenderId: "917178489558",
    appId: "1:917178489558:web:9cb91fcd3a194b8ab2c777",
    measurementId: "G-G3VY7XV1CH"
  };
  // Initialize Firebase
  export const fb = firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  export const db = firebase.firestore();
  export const dbLessonAdd = db.collection('lessonItems');
  export const dbOrders = db.collection('orderLesson');