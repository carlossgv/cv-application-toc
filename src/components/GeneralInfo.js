import React from 'react';
import TextInput from './TextInput';
import '../styles/App.css';

const GeneralInfo = () => {
  return (
    <div>
      <TextInput label="First name" name="firstName" type="text" />
      <TextInput label="Last name" name="lastName" type="text" />
      {/* <TextInput label="Date of birth" name="birthday" type="date" /> */}
      <TextInput label="Email" name="email" type="email" />
      <TextInput label="Phone" name="phone" type="tel" />
      <TextInput label="Address" name="address" type="text" />
      <TextInput label="City" name="city" type="text" />
      <TextInput label="Country" name="country" type="text" />
    </div>
  );
};

export default GeneralInfo;
