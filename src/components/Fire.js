import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'



var firebaseConfig = {
  apiKey: "AIzaSyDLNHF5MPsyphl5c3QRnaA4vh_OYXQhpak",
  authDomain: "curr-vitae.firebaseapp.com",
  projectId: "curr-vitae",
  storageBucket: "curr-vitae.appspot.com",
  messagingSenderId: "750807449433",
  appId: "1:750807449433:web:8d7d7333b937560db3d648",
  measurementId: "G-CKRV4VY0GT"
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