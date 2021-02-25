import React from 'react';
import Form from './components/Form';
import './styles/App.css';
class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Form />
        <div>Temporal Div</div>
      </div>
    );
  }
}

export default App;
