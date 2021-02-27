import React from 'react';
import { Component } from 'react';
import InputDisplay from './InputDisplay';

class CvGeneralInfo extends Component {
  render() {
    let name = `${this.props.data.firstName} ${this.props.data.lastName}`;
    let address = `${this.props.data.address}. ${this.props.data.city}, ${this.props.data.country}.`;

    if (this.props.data.firstName === undefined) {
      name = '';
      address = '';
    }

    return (
      <div className="displayDiv displayGeneralInfo">
        <div id="displayName">
          <InputDisplay text={name} />
        </div>
        <InputDisplay text={this.props.data.birthday} />
        <InputDisplay text={this.props.data.email} />
        <InputDisplay text={this.props.data.phone} />
        <div className="displayDiv addressInfo">
          <InputDisplay text={address} />
        </div>
      </div>
    );
  }
}

export default CvGeneralInfo;
