import React, { Fragment, useState } from 'react';
import Name from './components/Name';
import Count from './components/Count';
import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Count />
        <Name updateName={setName} />
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
}

export default App;
