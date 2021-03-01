import React from 'react';
import CvGeneralInfo from './CvGeneralInfo';
import CvEducationInfo from './CvEducationInfo';
import CvWorkInfo from './CvWorkInfo';
import '../styles/App.css';

const Cv = (props) => {
  let data = props.data;
  return (
    <div className="cv hidden">
      <div className="cvSide">
        <CvGeneralInfo data={data} />
      </div>
      <div className="cvMain">
        <CvEducationInfo data={data} />
        <CvWorkInfo data={data} />
      </div>
    </div>
  );
};

export default Cv;
