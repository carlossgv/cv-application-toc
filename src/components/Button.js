import React from 'react';
import { Component } from 'react';
import '../styles/App.css';

class Button extends Component {
  render() {
    return (
      <button
        onClick={() => this.props.handleChange()}
        type={this.props.type}
        form={this.props.type}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
