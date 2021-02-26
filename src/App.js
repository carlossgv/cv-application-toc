import React from 'react';
import Form from './components/Form';
import Cv from './components/Cv';
import './styles/App.css';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cvInfo: '',
      formInfo: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    let form = document.querySelector('form');
    let formObject = {};

    [...form.elements].forEach((e) => {
      if (formObject[e.name] === undefined) {
        formObject[e.name] = e.value;
        return;
      }
      if (!Array.isArray(formObject[e.name])) {
        formObject[e.name] = [formObject[e.name]];
      }
      formObject[e.name].push(e.value);
    });

    this.setState({
      formInfo: formObject,
    });
  }

  render() {
    let cvData = this.state.formInfo;
    return (
      <div className="main">
        <Form handleSubmit={this.handleSubmit} />
        <Cv data={cvData} />
      </div>
    );
  }
}

export default App;
