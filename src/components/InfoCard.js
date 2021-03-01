import React from 'react';
import TextInput from './TextInput';

const InfoCard = (props) => {
  if (props.type === 'education') {
    return (
      <div className="infoCard">
        <TextInput label="Institution Name" type="text" name="institution" />
        <TextInput label="Degree or Certification" type="text" name="degree" />
        <TextInput label="Completion Date" type="date" name="completionDate" />
      </div>
    );
  } else if (props.type === 'job') {
    return (
      <div className="infoCard">
        <TextInput label="Organization" type="text" name="organization" />
        <TextInput label="Job Title" type="text" name="jobTitle" />
        <TextInput label="Starting Date" type="date" name="startingDate" />
        <TextInput label="Finishing Date" type="date" name="finishingDate" />
        <TextInput
          label="Job Description"
          type="textarea"
          name="jobDescription"
        />
      </div>
    );
  }
};

export default InfoCard;
