import React from 'react';
import { Component } from 'react';

class InputDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  
  render() {
    return (
      <div className="inputDisplay">
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default InputDisplay;
