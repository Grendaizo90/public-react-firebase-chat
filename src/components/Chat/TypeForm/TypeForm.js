import React from 'react';

const TypeForm = (props) => {
  // console.log(props.text);
  
  return (
    <div className='typeform'>
      <input
        className='input'
        placeholder='Type your message...'
        type='text'
        value={props.text}
        onChange={e => props.setText(e.target.value)} />
      <button
        className='sendButton'
        type='submit'
        onClick={() => props.sendMessage(props.text)}>Send</button>
    </div>
  );
};

export default TypeForm;