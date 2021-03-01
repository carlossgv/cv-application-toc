import React from 'react';
import { useState } from 'react';
import Form from './components/Form';
import Cv from './components/Cv';
import './styles/App.css';

const App = () => {
  const [formInfo, setFormInfo] = useState({
    formData: '',
    cvData: <div>Your CV will Load Here</div>,
  });

  const handleSubmit = () => {
    let form = document.querySelector('form');
    let formObject = {};
    let cvPlaceholder = document.querySelector('.cvPlaceholder');
    let cvSide = document.querySelector('.cvSide');
    let cvMain = document.querySelector('.cvMain');

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

    cvPlaceholder.remove();
    cvSide.classList.remove('hidden');
    cvMain.classList.remove('hidden');

    setFormInfo({
      formData: formObject,
      cvData: formObject,
    });
  };

  return (
    <div>
      <header>
        <h1>CV Builder</h1>
      </header>
      <div className="main">
        <Form handleSubmit={handleSubmit} />
        <Cv data={formInfo.cvData} />
      </div>
      <footer>
        <p>Created by Carlos Gonzalez carlossgv@gmail.com</p>
      </footer>
    </div>
  );
};

export default App;
