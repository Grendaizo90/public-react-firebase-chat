import React, { useState } from 'react';
// import { Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Chat from '../Chat/Chat';
// import Login from '../Login/Login';


const AppContainer = () => {
  const [text, setText] = useState('');

  return (
    <div>
      <Navbar />
      <Chat
        text={text}
        setText={setText} />
    </div>
  );
};

export default AppContainer;