import React, { Fragment, useState } from 'react';
import Name from './components/Name3';
import Count from './components/Count2';
import Status from './components/Status';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [name, setName] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Count />
        <Name updateName={setName} />
        <Status />
      </main>
      <footer>
        <p>
          {name && name.length && (
            <Fragment>
              The Name has been changed to <b>{name}</b>
            </Fragment>
          )}
        </p>
      </footer>
    </div>
  );
};

export default App;
