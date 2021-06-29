import React from 'react';
import ChatWindow from './ChatWindow/ChatWindow';
import TypeForm from './TypeForm/TypeForm';

const Chat = (props) => {
  
  const sendMessage = (message) => {
    console.log(message);
  }

  return (
    <div className='chat'>
      <ChatWindow />
      <TypeForm
        text={props.text}
        setText={props.setText}
        sendMessage={sendMessage} />
    </div>
  );
};

export default Chat;