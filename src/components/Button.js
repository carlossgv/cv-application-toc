import React from 'react';
import '../styles/App.css';

const Button = (props) => {
  return (
    <button
      onClick={() => props.handleChange()}
      type={props.type}
      form={props.type}
    >
      {props.text}
    </button>
  );
};

export default Button;
