import React from 'react';
import { Component } from 'react';
import CvGeneralInfo from './CvGeneralInfo';
import CvEducationInfo from './CvEducationInfo';
import CvWorkInfo from './CvWorkInfo';
import '../styles/App.css';

class Cv extends Component {
  render() {
    let data = this.props.data;
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
  }
}

export default Cv;
