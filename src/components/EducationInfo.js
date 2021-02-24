import React from 'react';
import { Component } from 'react';
import InfoCard from './InfoCard';
import Button from './Button';

class EducationInfo extends Component {
  render() {
    return (
      <div>
        <InfoCard />
        <Button type="button" text="Add Education" />
      </div>
    );
  }
}

export default EducationInfo;
