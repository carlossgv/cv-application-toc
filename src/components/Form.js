import React from 'react';
import { Component } from 'react';
import '../styles/App.css';
import GeneralInfo from './GeneralInfo';
import ExpandableCard from './ExpandableCard';
import Button from './Button';

class Form extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(props);
  }

  handleSubmit(e) {
    console.log('im submitted');

    e.preventDefault();
  }

  render() {
    return (
      <form method="POST">
        <div className="form-group general-info-div">
          <GeneralInfo />
        </div>
        <div className="form-group education-info-div">
          <ExpandableCard type="education" buttonText="Add Education" />
        </div>
        <div className="form-group work-info-div">
          <ExpandableCard type="job" buttonText="Add Work Experience" />
        </div>
        <div className="form-group form-buttons-div">
          <Button type="submit" text="Submit CV" />
          <Button type="button" text="Edit CV" />
        </div>
      </form>
    );
  }
}

export default Form;
