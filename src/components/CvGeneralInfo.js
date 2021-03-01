import React from 'react';
import InputDisplay from './InputDisplay';

const CvGeneralInfo = (props) => {
  let name = `${props.data.firstName} ${props.data.lastName}`;
  let address = `${props.data.address}. ${props.data.city}, ${props.data.country}.`;

  if (props.data.firstName === undefined) {
    name = '';
    address = '';
  }

  return (
    <div className="displayDiv displayGeneralInfo">
      <div id="displayName">
        <InputDisplay text={name} />
      </div>
      <InputDisplay text={props.data.birthday} />
      <InputDisplay text={props.data.email} />
      <InputDisplay text={props.data.phone} />
      <div className="displayDiv addressInfo">
        <InputDisplay text={address} />
      </div>
    </div>
  );
};

export default CvGeneralInfo;
