import React from 'react';

const Message = (props) => {
  return (
    <div className='message'>
      <div className="userAvatar">
        <img src="https://dn-meb.ru/wp-content/uploads/2018/06/User_Placeholder.png" alt="avatar" />
      </div>
      <div className="messageText">{props.message}</div>
      <div className="timestamp">13.08.2021 17:54:31</div>
    </div>
  );
};

export default Message;