import React from 'react';

const Todo = ({id, text, complete}) => {

  const icon = complete ? "\u2714" : "\u2716";

  return (
    <li>
      <span>{text}</span>
      <span>{icon}</span>
    </li>
  );
}

export default Todo;
