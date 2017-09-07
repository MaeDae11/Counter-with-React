import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './components/Counter.js';
import CounterButton from './components/CounterButton.js';

class App extends Component {




    handleClickPositive = () => {
        const total = this.state.totalClicks;
        this.setState(
            {totalClicks: total + 1}
        );
    }
    handleClickNegative = () => {
        const total = this.state.totalClicks;
        this.setState(
            {totalClicks: total - 1}
        );
    }



  render() {
    return (
      <div className="App">
          <Counter />
          
      </div>
    );
  }
}

export default App;
