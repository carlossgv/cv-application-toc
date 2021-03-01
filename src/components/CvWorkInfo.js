import React from 'react';
import InputDisplay from './InputDisplay';
import _ from 'lodash';

const CvWorkInfo = (props) => {
  let formData = props.data;
  let workList = [];
  if (formData && Array.isArray(formData.organization)) {
    for (let i = 0; i < formData.organization.length; i++) {
      workList.push(
        <div className="cvWorkDiv" key={_.uniqueId('work_')}>
          <InputDisplay text={formData.organization[i]} />
          <InputDisplay text={formData.jobTitle[i]} />
          <InputDisplay
            text={`From: ${formData.startingDate[i]} - To: ${formData.finishingDate[i]}`}
          />
          <InputDisplay text={formData.jobDescription[i]} />
        </div>
      );
    }
  } else if (formData) {
    workList.push(
      <div className="cvWorkDiv" key={_.uniqueId('work_')}>
        <InputDisplay text={formData.organization} />
        <InputDisplay text={formData.jobTitle} />
        <InputDisplay
          text={`From: ${formData.startingDate} - To: ${formData.finishingDate}`}
        />
        <InputDisplay text={formData.jobDescription} />
      </div>
    );
  }

  return (
    <div className="cvWorkInfo">
      <h3>JOB EXPERIENCE</h3>
      <div className="displayDiv displayWorkInfo">{workList}</div>
    </div>
  );
};

export default CvWorkInfo;
