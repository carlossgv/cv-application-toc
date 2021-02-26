import React from 'react';
import { Component } from 'react';
import CvGeneralInfo from './CvGeneralInfo';
// import CvEducationInfo from './CvEducationInfo'
// import CvWorkInfo from './CvWorkInfo'
import '../styles/App.css';

class Cv extends Component {
  render() {
    let data = this.props.data;
    console.log(data);
    return (
      <div className="cv">
        <h1>CV GOES HERE</h1>
        <CvGeneralInfo data={data} />
        {/* <CvEducationInfo />
            <CvWorkInfo /> */}
      </div>
    );
  }
}

export default Cv;
