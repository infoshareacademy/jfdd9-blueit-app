import React, {Component} from 'react';
import './App.css';
import NavbarMenu from './Components/Navbar/NavbarMenu'
import RentCarScreenView from "./Components/RentCarScreenView/RentCarScreenView";

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


          <Route exact path="/" component={RentCarScreenView}/>
          <Route path="/rent-car-screen" component={RentCarScreenView}/>
          {/*<Route path="/my-rentals-screen" component={MyRentsalsScreen}/>*/}
          {/*<Route path="/rent-summary-screen" component={RentSummaryScreen}/>*/}
        </div>
      </Router>
    );
  }
}

export default App;
