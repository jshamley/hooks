import React from 'react';
import Name from './components/Name';
import Count from './components/Count';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Count />
        <Name />
      </main>
    </div>
  );
}

export default App;
