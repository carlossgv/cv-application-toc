import React from 'react';
import { Component } from 'react';
import TextInput from './TextInput';

class InfoCard extends Component {
  render() {
    return (
      <div>
        <TextInput label="Institution Name" type="text" name="institution" />
        <TextInput label="Degree or Certification" type="text" name="degree" />
        <TextInput label="Finishing Date" type="date" name="date" />
      </div>
    );
  }
}

export default InfoCard;
