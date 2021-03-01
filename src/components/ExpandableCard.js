import React from 'react';
import { useState } from 'react';
import _ from 'lodash';
import '../styles/App.css';
import InfoCard from './InfoCard';
import Button from './Button';

const ExpandableCard = (props) => {
  const [cardsList, setCardsList] = useState([
    <InfoCard key={_.uniqueId()} type={props.type} />,
  ]);

  function handleChangeAdd() {
    const updatedCardsList = [...cardsList];

    updatedCardsList.push(<InfoCard key={_.uniqueId()} type={props.type} />);

    setCardsList(updatedCardsList);
  }

  function handleChangeRemove() {
    const updatedCardsList = [...cardsList];

    updatedCardsList.splice(-1, 1);

    setCardsList(updatedCardsList);
  }

  let removeButton = '';
  if (cardsList.length > 1) {
    removeButton = (
      <Button
        type="button"
        text={props.buttonTextRemove}
        handleChange={handleChangeRemove}
      />
    );
  }

  return (
    <div className="expandableCard">
      {cardsList}
      <Button
        type="button"
        text={props.buttonTextAdd}
        handleChange={handleChangeAdd}
      />
      {removeButton}
    </div>
  );
};

// class ExpandableCard extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       cardsList: [<InfoCard key={_.uniqueId()} type={this.props.type} />],
//     };
//     this.handleChangeAdd = this.handleChangeAdd.bind(this);
//     this.handleChangeRemove = this.handleChangeRemove.bind(this);
//   }

//   handleChangeAdd() {
//     const updatedCardsList = [...this.state.cardsList];

//     updatedCardsList.push(
//       <InfoCard key={_.uniqueId()} type={this.props.type} />
//     );

//     this.setState({ cardsList: updatedCardsList });
//   }

//   handleChangeRemove() {
//     const updatedCardsList = [...this.state.cardsList];

//     updatedCardsList.splice(-1, 1);

//     this.setState({ cardsList: updatedCardsList });
//   }

//   render() {
//     let removeButton = '';
//     if (this.state.cardsList.length > 1) {
//       removeButton = (
//         <Button
//           type="button"
//           text={this.props.buttonTextRemove}
//           handleChange={this.handleChangeRemove}
//         />
//       );
//     }

//     return (
//       <div className="expandableCard">
//         {this.state.cardsList}
//         <Button
//           type="button"
//           text={this.props.buttonTextAdd}
//           handleChange={this.handleChangeAdd}
//         />
//         {removeButton}
//       </div>
//     );
//   }
// }

export default ExpandableCard;
