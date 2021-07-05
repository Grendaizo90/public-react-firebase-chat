import React, { useContext } from 'react';
import firebase from 'firebase/app';
import { Context } from '../../App';

export const SignIn = () => {
  const {auth} = useContext(Context);

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const {user} = await auth.signInWithPopup(provider);
    console.log(user);
  };

  return (
    <div>
      <button className="authBtn" onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export const SignOut = () => {
  const {auth} = useContext(Context);
  return auth.currentUser && (
    <button className="authBtn" onClick={() => auth.signOut()}>Sign Out</button>
  );
};