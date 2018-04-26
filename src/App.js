import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CarFeatures from "./Components/DateForm/CarFeatures/CarFeatures";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CarFeatures/>
      </div>
    );
  }
}

export default App;
