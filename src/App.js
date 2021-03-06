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
import UserAddedCars from "./Components/UserAddedCars/UserAddedCars";
import {SearchProvider} from "./Components/contexts/Search";
import {CarProvider} from "./Components/contexts/Cars";
import LoginScreen from "./Components/LoginScreen/LoginScreen";
import {withUser} from './Components/contexts/User';
import './App.css'
import logo from './carwhite.png'

class App extends Component {

  render() {
    return (
      <CarProvider>
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
                        <div className="longMenu">
                          <div className="longMenu-logo">
                            <img src={logo}/>
                            <span className="longMenu-text">BlueSky Cars</span>
                          </div>
                          <div className='SignOutButtonContainer'>
                          <span
                            className="SignInAs">Signed in as: <strong>{this.props.user && this.props.user.email}</strong></span>
                            <button className='SignOutButton' onClick={this.props.signOut}>Sign out</button>
                          </div>
                        </div>

                        <NavbarMenu/>

                      </nav>

                      <Route exact path="/" render={() => <RentCarScreen rentDates={this.rentDates}/>}/>
                      {/*<Route path="/rent-car-screen" render={() => <RentCarScreen rentDates={this.rentDates}/>}/>*/}
                      <Route path="/my-rentals-screen" component={MyRentsalsScreen}/>
                      <Route path="/rent-confirm/:carId" component={ReservationConfirm}/>
                      <Route path="/user-added-cars" component={UserAddedCars}/>
                    </div>
                  )
                }

              </div>
            </Router>
          </SearchProvider>
        </ReservationProvider>
      </CarProvider>
    );
  }
}

export default withUser(App)

