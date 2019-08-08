import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// initialize firebase
const firebaseConfig = {
  // paste here :)
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });
firebase.firestore();

export default firebase;
