import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// initialize firebase
const firebaseConfig = {
  apiKey: "YOUR API KEY",
  authDomain: "YOUR AUTH DOMAIN",
  databaseURL: "YOUR DATABASE URL",
  projectId: "YOUR PROJECTID",
  storageBucket: "",
  // take this data from your firebase console
};

firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });
firebase.firestore();

export default firebase;
