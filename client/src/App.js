import React, { Component } from 'react';
import logo from './logo.svg';
import { Random } from './pages/Random.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Random />
      </div>
    );
  }
}

export default App;
