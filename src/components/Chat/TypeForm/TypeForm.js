import React, { useState } from 'react';

const TypeForm = () => {
  const [text, updateText] = useState('');

  return (
    <div className='typeform'>
      <input
        className='input'
        placeholder='Type your message...'
        type='text'
        value={text}
        onChange={e => updateText(e.target.value)} />
      <button
        className='send'
        type='submit'>Send</button>
    </div>
  );
};

export default TypeForm;