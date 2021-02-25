import React from 'react';
import { Component } from 'react';
import TextInput from './TextInput';

class InfoCard extends Component {
  render() {
    if (this.props.type === 'education') {
      return (
        <div>
          <TextInput label="Institution Name" type="text" name="institution" />
          <TextInput
            label="Degree or Certification"
            type="text"
            name="degree"
          />
          <TextInput label="Finishing Date" type="date" name="date" />
        </div>
      );
    } else if (this.props.type === 'job') {
      return (
        <div>
          <TextInput label="Organization" type="text" name="organization" />
          <TextInput label="Job Title" type="text" name="jobTitle" />
          <TextInput label="Starting Date" type="date" name="starting-date" />
          <TextInput label="Finishing Date" type="date" name="finishing-date" />
          <TextInput
            label="Job Description"
            type="textarea"
            name="job-description"
          />
        </div>
      );
    }
  }
}

export default InfoCard;
