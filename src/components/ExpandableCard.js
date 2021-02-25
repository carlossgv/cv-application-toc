import React from 'react';
import { Component } from 'react';
import '../styles/App.css';
import InfoCard from './InfoCard';
import Button from './Button';

class ExpandableCard extends Component {
  constructor(props) {
    super(props);

    this.state = { cardsList: [<InfoCard type={this.props.type} />] };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const updatedCardsList = [...this.state.cardsList];

    updatedCardsList.push(<InfoCard type={this.props.type} />);

    this.setState({ cardsList: updatedCardsList });
  }

  render() {
    return (
      <div className="expandableCard">
        {this.state.cardsList}
        <Button
          type="button"
          text={this.props.buttonText}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default ExpandableCard;
