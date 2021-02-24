import React from 'react';
import { Component } from 'react';

class TextInput extends Component {
  render() {
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input
          name={this.props.name}
          type={this.props.type}
          value={this.props.value}
          placeholder={this.props.placeholder}
          id={this.props.id}
        />
      </div>
    );
  }
}

export default TextInput;
