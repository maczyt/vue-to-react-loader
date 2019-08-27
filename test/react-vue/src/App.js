import React from 'react';
import logo from './logo.svg';
import './App.css';
import Count from './count.vue';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Count /> 
      </header>
    </div>
  );
}

export default App;
