import React, { useState } from 'react';
import '../styles/App.css';

function TextInput(props) {
  const [value, setValue] = useState('');

  // useEffect(() => {
  //   function handleChange(e) {
  //     setValue(e.target.value);
  //   }
  // }, [e.target.value]);

  function handleChange(e) {
    setValue(e.target.value);
  }

  if (props.type === 'textarea') {
    return (
      <div>
        <label htmlFor={props.id}>{props.label}</label>
        <textarea
          className="form-control"
          name={props.name}
          type={props.type}
          value={value}
          placeholder={props.placeholder}
          id={props.id}
          onChange={handleChange}
        ></textarea>
      </div>
    );
  } else {
    return (
      <div>
        <label htmlFor={props.id}>{props.label}</label>
        <input
          name={props.name}
          type={props.type}
          value={value}
          placeholder={props.placeholder}
          id={props.id}
          onChange={handleChange}
        />
      </div>
    );
  }
}

export default TextInput;
