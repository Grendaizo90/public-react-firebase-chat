import React from 'react';
import ChatWindow from './ChatWindow/ChatWindow';
import TypeForm from './TypeForm/TypeForm';

const Chat = () => {
  return (
    <div className='chat'>
      <ChatWindow />
      <TypeForm />
    </div>
  );
};

export default Chat;