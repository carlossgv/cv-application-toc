import React from 'react';
import CvGeneralInfo from './CvGeneralInfo';
import CvEducationInfo from './CvEducationInfo';
import CvWorkInfo from './CvWorkInfo';
import '../styles/App.css';

const Cv = (props) => {
  let data = props.data;
  return (
    <div className="cv">
      <div className="cvPlaceholder">
        <h3>YOUR CV WILL LOAD HERE</h3>
      </div>
      <div className="cvSide hidden">
        <CvGeneralInfo data={data} />
      </div>
      <div className="cvMain hidden">
        <CvEducationInfo data={data} />
        <CvWorkInfo data={data} />
      </div>
    </div>
  );
};

export default Cv;
