import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAQTBPJ0Kmb_AAZpwJK06fusjzH9L6AWno",
  authDomain: "challenge-b0bad.firebaseapp.com",
  projectId: "challenge-b0bad",
  storageBucket: "challenge-b0bad.appspot.com",
  messagingSenderId: "376524028322",
  appId: "1:376524028322:web:fc340bdeb7ba8f41239afb",
  measurementId: "G-3QMHLMB64C"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
