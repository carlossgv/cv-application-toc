import React from 'react';
import { Component } from 'react';
import InputDisplay from './InputDisplay';

class CvGeneralInfo extends Component {

  render() {
    return (
      <div className="displayDiv displayGeneralInfo">
        <InputDisplay text={this.props.data.firstName} />
        <InputDisplay text={this.props.data.lastName} />
        <InputDisplay text={this.props.data.birthday} />
        <InputDisplay text={this.props.data.email} />
        <InputDisplay text={this.props.data.phone} />
        <InputDisplay text={this.props.data.address} />
        <InputDisplay text={this.props.data.city} />
        <InputDisplay text={this.props.data.country} />
      </div>
    );
  }
}

export default CvGeneralInfo;
