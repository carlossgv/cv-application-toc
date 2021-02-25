import React from 'react';
import { Component } from 'react';
import TextInput from './TextInput';
import '../styles/App.css';

class GeneralInfo extends Component {
  render() {
    return (
      <div>
        <TextInput label="First name" name="first-name" type="text" />
        <TextInput label="Last name" name="last-name" type="text" />
        <TextInput label="Date of birth" name="birthday" type="date" />
        <TextInput label="Email" name="email" type="email" />
        <TextInput label="Phone" name="tel" type="tel" />
        <TextInput label="Phone" name="adress" type="text" />
        <TextInput label="City" name="city" type="text" />
        <TextInput label="Country" name="country" type="text" />
      </div>
    );
  }
}

export default GeneralInfo;
