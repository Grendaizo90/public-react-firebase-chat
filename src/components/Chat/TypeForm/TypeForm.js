import React, { useState } from 'react';

const TypeForm = ({handleSubmit}) => {
  const [text, setText] = useState('')
  

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleApply = (e) => {
    e.preventDefault()
    handleSubmit(text)
    setText('')
  }

  // create an empty div 'dummy',
  // create ref, dummy.current.scrollIntoView({behavior: 'smooth})


  return (
    <form
      className="typeForm"
      onSubmit={handleApply}>
      <input
        name="messageForm"
        className="input"
        placeholder="Type your message..."
        type="text"
        value={text}
        onChange={handleChange} />
      <button
        className="sendButton"
        type="submit">Send</button>
    </form>
  );
};

export default TypeForm;