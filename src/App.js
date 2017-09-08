import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './components/Counter.js';
import CounterButton from './components/CounterButton.js';

class App extends Component {


  render() {
    return (
      <div className="App">
          <Counter />
      </div>
    );
  }
}

export default App;
