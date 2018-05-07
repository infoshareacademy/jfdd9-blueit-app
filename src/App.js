import React, {Component} from 'react';
import './App.css';
import NavbarMenu from './Components/Navbar/NavbarMenu'
import RentCarScreen from "./Components/RentCarScreen";

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {

  state = {
    startDate: null,
    endDate: null
  };

  rentDates = (startDate, endDate) =>
    this.setState({
      startDate: startDate,
      endDate: endDate
    });

  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <NavbarMenu/>
          </nav>


          <Route exact path="/" component={RentCarScreen}/>
          <Route path="/rent-car-screen" render={() => <RentCarScreen rentDates={this.rentDates}/>}/>
          {/*<Route path="/my-rentals-screen" component={MyRentsalsScreen}/>*/}
          {/*<Route path="/rent-summary-screen" component={RentSummaryScreen}/>*/}
        </div>
      </Router>
    );
  }
}

export default App;
