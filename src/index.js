import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "./store/reducers/rootReducers";
// untuk binding redux kedalam reactjs
import { ReactReduxContext as Provider } from "react-redux";
// menambahkan thunk sebagai middleware
import thunk from "redux-thunk";
// menghubungkan react-firebase dan redux-firestore untuk mengakses API mereka
import {
  createFirestoreInstance as reduxFirestore,
  getFirestore
} from "redux-firestore";
import {
  ReactReduxFirebaseProvider as reactReduxFirebase,
  getFirebase
} from "react-redux-firebase";
// import file konfigurasi dari firebase lalu parsing kedalam reduxFirestore() dan reactReduxFirebase(), penambahan compose sebagai fungsi penggabung getFirebase dan getFirestore
import fbconfig from "./config/firebase";

//malah error disini
const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbconfig),
    reactReduxFirebase(fbconfig)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
