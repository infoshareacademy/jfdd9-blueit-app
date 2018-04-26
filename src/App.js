import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CarRentButton from './Components/CarList/CarListItem/CarRentButton/CarRentButton';
import ShowMore from './Components/CarList/CarListItem/ShowMore/ShowMore'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p><CarRentButton/></p>
        <p><ShowMore/></p>
      </div>
    );
  }
}

export default App;
