import React, {Component} from 'react';
import './App.css';
import NavbarMenu from './Components/Navbar/NavbarMenu'
import RentCarScreen from "./Components/RentCarScreen";
import MyRentsalsScreen from "./Components/MyRentsalsScreen";
import RentSummaryScreen from "./Components/RentSummaryScreen";
import CancelRentButton from "./Components/CarListItem/CancelRentButton/CancelRentButton";

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <NavbarMenu/>
          </nav>
          <CancelRentButton/>

          <Route exact path="/" component={RentCarScreen}/>
          <Route path="/rent-car-screen" component={RentCarScreen}/>
          <Route path="/my-rentals-screen" component={MyRentsalsScreen} />
          <Route path="/rent-summary-screen" component={RentSummaryScreen} />
        </div>
      </Router>



    );
  }
}

export default App;
