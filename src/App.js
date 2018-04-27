import React, { Component } from 'react';
import './App.css';
import CarRentButton from './Components/CarList/CarListItem/CarRentButton/CarRentButton';
import ShowMore from './Components/CarList/CarListItem/ShowMore/ShowMore'
import CarDescription from './Components/CarList/CarListItem/CarDescription/CarDescription';
import CarImg from './Components/CarList/CarListItem/CarImg/CarImg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p><CarRentButton/></p>
        <p><ShowMore/></p>
        <p><CarDescription/></p>
        <p><CarImg/></p>
      </div>
    );
  }
}

export default App;
