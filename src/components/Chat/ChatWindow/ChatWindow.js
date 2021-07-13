import React from 'react';
import Message from '../../Message/Message';

const ChatWindow = ({ messages }) => {

  return (
    <div className='window'>
      {messages && messages.map(msg => <Message key={msg.id} message={msg} />)}
    </div>
  );
};

export default ChatWindow;