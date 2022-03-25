import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'



var firebaseConfig = {
  apiKey: "AIzaSyCLGNS3-yZ3W-ZfcrlDZNv7D7XRVwCQq6E",
  authDomain: "waqas-cv.firebaseapp.com",
  projectId: "waqas-cv",
  storageBucket: "waqas-cv.appspot.com",
  messagingSenderId: "291779153268",
  appId: "1:291779153268:web:64e895db2fd08ed834f021",
  measurementId: "G-8E756D76QK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();


export default firebase;






    // apiKey: "AIzaSyCRKceXGhdhpKFQiAJ2Qgkb1wXgXbI36RQ",
    // authDomain: "ngrpractice.firebaseapp.com",
    // projectId: "ngrpractice",
    // storageBucket: "ngrpractice.appspot.com",
    // messagingSenderId: "384804225359",
    // appId: "1:384804225359:web:d1c84f17b1de731c99853a",
    // measurementId: "G-NKKRC8FGHL"