import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'



var firebaseConfig = {
  apiKey: "AIzaSyDW0lYiCdPy2O6xK3TF6HzcF0pvlFlAQEg",
  authDomain: "profile-my.firebaseapp.com",
  projectId: "profile-my",
  storageBucket: "profile-my.appspot.com",
  messagingSenderId: "30005742121",
  appId: "1:30005742121:web:6fd408d2f37f1f0fc0ea38",
  measurementId: "G-PG79YWDDR2"
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