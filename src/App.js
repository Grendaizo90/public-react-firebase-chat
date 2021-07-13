import { BrowserRouter } from 'react-router-dom';
import { createContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import Navbar from './components/Navbar/Navbar';
import AppRouter from './AppRouter';
import './App.css';
import Loader from './extras/Loader';


firebase.initializeApp({
  apiKey: "AIzaSyDlwUOLT0GYYa2g6cCrDbmCSMsKBUiAmoE",
  authDomain: "public-chat-test-19bc5.firebaseapp.com",
  projectId: "public-chat-test-19bc5",
  storageBucket: "public-chat-test-19bc5.appspot.com",
  messagingSenderId: "595388392468",
  appId: "1:595388392468:web:ae1b47d72a5af7f3c77301",
  measurementId: "G-2QGX05MR0F"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

export const Context = createContext(null);

const App = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loader />
  }

  return (
    <BrowserRouter>
      <Context.Provider value={{
        firebase,
        auth,
        firestore
      }}>
        <Navbar />
        <AppRouter />
      </Context.Provider>
    </BrowserRouter>
  );
};

export default App;
