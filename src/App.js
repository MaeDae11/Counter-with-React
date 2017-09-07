import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Number from './components/Number.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Number />
      </div>
    );
  }
}

export default App;
