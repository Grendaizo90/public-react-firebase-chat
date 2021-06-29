import React from 'react';
import Message from '../../Message/Message';

const ChatWindow = (props) => {
  // const allMessages = props.messages.map(m =>
  //   <Message
  //     key={m.id}
  //     message={m.message} />  
  // )
  return (
    <div className='window'>
      {/* {allMessages} */}
      <Message />
    </div>
  );
};

export default ChatWindow;