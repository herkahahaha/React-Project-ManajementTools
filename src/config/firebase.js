import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// initialize firebase
const firebaseConfig = {
  apiKey: "AIzaSyB4ibbA3wNpbTH4uiT55BXk-M3xk9RyhBA",
  authDomain: "react-haha-isekai.firebaseapp.com",
  databaseURL: "https://react-haha-isekai.firebaseio.com",
  projectId: "react-haha-isekai",
  storageBucket: "",
  messagingSenderId: "751519913553",
  appId: "1:751519913553:web:f75fc959302d6a39"
};

firebase.initalizeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshot: true });

export default firebase;
