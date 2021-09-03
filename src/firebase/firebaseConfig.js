import firebase from "firebase/app";
import "firebase/firestore"


firebase.initializeApp({
    apiKey: "AIzaSyCteuvehrgbNt74shm6uDgo2Xls_xAtHlo",
    authDomain: "fakestorejq.firebaseapp.com",
    projectId: "fakestorejq",
    storageBucket: "fakestorejq.appspot.com",
    messagingSenderId: "340516290296",
    appId: "1:340516290296:web:b07a898a29d7d8015bc50d"
  });

  const db = firebase.firestore()
  export{
    firebase,
    db,
}