import React from 'react';
import { Component } from 'react';
import GeneralInfo from './GeneralInfo';
import EducationInfo from './EducationInfo';

class Form extends Component {
  render() {
    return (
      <form method="POST">
        <GeneralInfo />
        <EducationInfo />
      </form>
    );
  }
}

export default Form;
