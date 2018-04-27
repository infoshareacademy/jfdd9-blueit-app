import React, {Component} from 'react';
import './App.css';
import NavBar from './Components/Navbar/Navbar'
import RentCarScreen from "./Components/RentCarScreen";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>

        <div>
          <NavBar/>
          <Route path="/rent-car" component={RentCarScreen} />
          {/*<Route path="/my-rentals" component={MyRentsalsScreen} />*/}

          <RentCarScreen/>
        </div>

      </Router>
    );
  }
}

export default App;
