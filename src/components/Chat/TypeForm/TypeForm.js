import React from 'react';

const TypeForm = (props) => {

  return (
    <form
      className="typeForm"
      onSubmit={(e) => props.handleSubmit(e, props.text)}>
      <input
        name="messageForm"
        className="input"
        placeholder="Type your message..."
        type="text"
        value={props.text}
        onChange={e => props.setText(e.target.value)} />
      <button
        className="sendButton"
        type="submit">Send</button>
    </form>
  );
};

export default TypeForm;