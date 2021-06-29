import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';


firebase.initializeApp({
  apiKey: "AIzaSyDlwUOLT0GYYa2g6cCrDbmCSMsKBUiAmoE",
  authDomain: "public-chat-test-19bc5.firebaseapp.com",
  projectId: "public-chat-test-19bc5",
  storageBucket: "public-chat-test-19bc5.appspot.com",
  messagingSenderId: "595388392468",
  appId: "1:595388392468:web:ae1b47d72a5af7f3c77301",
  measurementId: "G-2QGX05MR0F"
});
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
