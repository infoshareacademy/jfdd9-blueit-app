import React, {Component} from 'react';
import NavbarMenu from './Components/Navbar/NavbarMenu'
import RentCarScreen from "./Components/RentCarScreen";
import ReservationConfirm from './Components/CarListItem/ReservationConfirm/ReservationConfirm'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import {ReservationProvider} from "./Components/contexts/Reservation";
import MyRentsalsScreen from "./Components/MyRentsalsScreen";
import {SearchProvider} from "./Components/contexts/Search";

class App extends Component {

  render() {
    return (
      <ReservationProvider>
        <SearchProvider>
          <Router>
            <div className="App">
              <nav>
                <NavbarMenu/>
              </nav>
              <Route exact path="/" render={() => <RentCarScreen rentDates={this.rentDates}/>}/>
              {/*<Route path="/rent-car-screen" render={() => <RentCarScreen rentDates={this.rentDates}/>}/>*/}
              <Route path="/my-rentals-screen" component={MyRentsalsScreen}/>
              <Route path="/rent-confirm" component={ReservationConfirm}/>
            </div>
          </Router>
        </SearchProvider>
      </ReservationProvider>
    );
  }
}

export default App;
