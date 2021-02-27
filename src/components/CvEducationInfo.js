import React from 'react';
import { Component } from 'react';
import InputDisplay from './InputDisplay';
import _ from 'lodash';

class CvEducationInfo extends Component {
  render() {
    let formData = this.props.data;
    let educationList = [];
    if (formData && Array.isArray(formData.institution)) {
      for (let i = 0; i < formData.institution.length; i++) {
        educationList.push(
          <div className="cvEducationDiv" key={_.uniqueId('education_')}>
            <InputDisplay text={formData.institution[i]} />
            <InputDisplay text={formData.degree[i]} />
            <InputDisplay text={formData.completionDate[i]} />
          </div>
        );
      }
    } else {
      educationList.push(
        <div className="cvEducationDiv" key={_.uniqueId('education_')}>
          <InputDisplay text={formData.institution} />
          <InputDisplay text={formData.degree} />
          <InputDisplay text={formData.completionDate} />
        </div>
      );
    }

    return (
      <div className="cvEducationInfo">
        <h3>EDUCATION</h3>
        <div className="displayDiv displayEducationInfo">{educationList}</div>
      </div>
    );
  }
}

export default CvEducationInfo;
