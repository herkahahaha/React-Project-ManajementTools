import authReducers from "./authReducers";
import projectReducers from "./projectReducers";
// bawaan redux
import { combineReducers } from "redux";
// mengsynkronkan firestore
import { firestoreReducer } from "redux-firestore";

const rootReducers = combineReducers({
  auth: authReducers,
  project: projectReducers,
  firestore: firestoreReducer
});
export default rootReducers;
