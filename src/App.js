import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { SignIn } from './components/SignIn/SignIn';
import Navbar from './components/Navbar/Navbar';
import Chat from './components/Chat/Chat';
import './App.css';


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

  const [user] = useAuthState(auth);

  return (
    <BrowserRouter>
      <Context.Provider value={{
        firebase,
        auth,
        firestore
      }}>
        <Navbar />
        {user ? (
          <Switch>
            <Route path='/chat' exact={true} component={Chat} />
            <Redirect to={'/chat'} />
          </Switch>
        )
          :
          (
            <Switch>
              <Route path='/login' exact={true} component={SignIn} />
              <Redirect to={'/login'} />
            </Switch>
          )
        }
      </Context.Provider>
    </BrowserRouter>
  );
};

export default App;
