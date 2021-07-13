import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Context } from '../../App';
import firebase from 'firebase';
import Loader from '../../extras/Loader';
import ChatWindow from './ChatWindow/ChatWindow';
import TypeForm from './TypeForm/TypeForm';


const Chat = () => {
  const {auth, firestore} = useContext(Context);
  const [user, loading] = useAuthState(auth);

  const { uid, photoURL } = auth.currentUser;

  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt');
  const [messages] = useCollectionData(query, {idField: 'id'});
  // , {idField: 'id'}

  const handleSubmit = async (message) => {
    const res = await messagesRef.add({
      uid,
      displayName: user.displayName,
      photoURL,
      text: message,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });

    return res;
  }

  if (loading) {
    return <Loader />
  }

  return (
    <div className='chat'>
      <ChatWindow messages={messages} />
      <TypeForm
        handleSubmit={handleSubmit} />
    </div>
  );
};

export default Chat;