import React, { useState } from 'react';

const TypeForm = () => {
  const [text, updateText] = useState('');

  return (
    <div>
      <input
        type='text'
        value={text}
        onChange={e => updateText(e.target.value)} />
      <button
        type='submit'>Send</button>
    </div>
  );
};

export default TypeForm;