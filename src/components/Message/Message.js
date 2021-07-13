import React, { useContext } from 'react';
import { Context } from '../../App';

const Message = ({ message }) => {
  const { auth } = useContext(Context);
  const { uid, text, photoURL, createdAt } = message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <div className={`message ${messageClass}`}>
      <div className="userAvatar">
        <img src={photoURL} alt="userAvatar" />
        {/* <img src="https://dn-meb.ru/wp-content/uploads/2018/06/User_Placeholder.png" alt="avatar" /> */}
      </div>
      <div className="messageText">{text}</div>
      <div className="timestamp">
        13.08.2021 17:54:31
        {/* {createdAt} */}
      </div>
    </div>
  );
};

export default Message;