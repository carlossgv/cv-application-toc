import React from 'react';
import { Component } from 'react';
import TextInput from './TextInput';
import '../styles/App.css';

class GeneralInfo extends Component {
  render() {
    return (
      <div>
        <TextInput label="First name" name="firstName" type="text" />
        <TextInput label="Last name" name="lastName" type="text" />
        <TextInput label="Date of birth" name="birthday" type="date" />
        <TextInput label="Email" name="email" type="email" />
        <TextInput label="Phone" name="tel" type="tel" />
        <TextInput label="Address" name="address" type="text" />
        <TextInput label="City" name="city" type="text" />
        <TextInput label="Country" name="country" type="text" />
      </div>
    );
  }
}

export default GeneralInfo;
