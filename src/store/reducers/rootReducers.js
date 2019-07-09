import authReducers from "./authReducers";
import projectReducers from "./projectReducers";
// bawaan redux
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  auth: authReducers,
  project: projectReducers
});
export default rootReducers;
