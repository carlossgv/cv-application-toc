import React from 'react';
import '../styles/App.css';
import GeneralInfo from './GeneralInfo';
import ExpandableCard from './ExpandableCard';
import Button from './Button';

const Form = (props) => {
  return (
    <form>
      <div className="form-group general-info-div">
        <h4>GENERAL INFORMATION</h4>
        <GeneralInfo />
      </div>
      <div className="form-group education-info-div">
        <h4>EDUCATION</h4>
        <ExpandableCard
          type="education"
          buttonTextAdd="Add Education"
          buttonTextRemove="Remove Education"
        />
      </div>
      <div className="form-group work-info-div">
        <h4>EXPERIENCE</h4>
        <ExpandableCard
          type="job"
          buttonTextAdd="Add Experience"
          buttonTextRemove="Remove Experience"
        />
      </div>
      <div className="form-group form-buttons-div">
        <Button
          type="submit"
          text="Submit CV"
          handleChange={props.handleSubmit}
        />
      </div>
    </form>
  );
};

export default Form;
