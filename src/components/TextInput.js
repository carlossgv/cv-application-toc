import React from 'react';
import { Component } from 'react';
import '../styles/App.css';

class TextInput extends Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    if (this.props.type === 'textarea') {
      return (
        <div>
          <label htmlFor={this.props.id}>{this.props.label}</label>
          <textarea
            className="form-control"
            name={this.props.name}
            type={this.props.type}
            value={this.state.value}
            placeholder={this.props.placeholder}
            id={this.props.id}
            onChange={this.handleChange}
          ></textarea>
        </div>
      );
    } else {
      return (
        <div>
          <label htmlFor={this.props.id}>{this.props.label}</label>
          <input
            name={this.props.name}
            type={this.props.type}
            value={this.state.value}
            placeholder={this.props.placeholder}
            id={this.props.id}
            onChange={this.handleChange}
          />
        </div>
      );
    }
  }
}

export default TextInput;
