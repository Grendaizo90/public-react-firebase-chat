import React, { useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestore } from '../../App';
import ChatWindow from './ChatWindow/ChatWindow';
import TypeForm from './TypeForm/TypeForm';

let messages = [];


const Chat = () => {
  // const messagesRef = firestore.collection('messages');
  // const query = messagesRef.orderBy('createdAt').limit(10);

  // const [messages] = useCollectionData(query, {idField: 'id'});

  const [text, setText] = useState('');

  const handleSubmit = (e, message) => {
    e.preventDefault();
    let newMessage = {
      id: messages.length + 1,
      message: message
    };
    messages = [...messages, newMessage];
    console.log(messages);
    setText('');
  }

  return (
    <div className='chat'>
      <ChatWindow messages={messages} />
      <TypeForm
        text={text}
        setText={setText}
        handleSubmit={handleSubmit} />
    </div>
  );
};

export default Chat;