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
import LoginScreen from "./Components/LoginScreen/LoginScreen";
import { withUser } from './Components/contexts/User';
import './App.css'

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
      <ReservationProvider>
        <SearchProvider>
          <Router>
            <div className="App">
              {
                this.props.user === null ? (
                  <div>
                    <LoginScreen/>
                  </div>
                ) : (
                  <div>
                    <nav>
                      <NavbarMenu/>
                      <p>
                        <button className='SignOutButton' onClick={this.props.signOut}>Sign out</button>
                      </p>
                    </nav>

                    <Route exact path="/" render={() => <RentCarScreen rentDates={this.rentDates}/>}/>
                    {/*<Route path="/rent-car-screen" render={() => <RentCarScreen rentDates={this.rentDates}/>}/>*/}
                    <Route path="/my-rentals-screen" component={MyRentsalsScreen}/>
                    <Route path="/rent-confirm" component={ReservationConfirm}/>
                  </div>
                )
              }

            </div>
          </Router>
        </SearchProvider>
      </ReservationProvider>
    );
  }
}

export default withUser(App)

