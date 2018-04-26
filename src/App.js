import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CancelRentButton from "./Components/CarListItem/CancelRentButton/CancelRentButton";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CancelRentButton/>
      </div>
    );
  }
}

export default App;
