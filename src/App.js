import React, {Component} from 'react';
import './App.css';
import NavbarMenu from './Components/Navbar/NavbarMenu'
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
        <div className="App">
          <nav>
            <NavbarMenu/>
          </nav>

          <Route path="/rent-car" component={RentCarScreen}/>
          {/*<Route path="/my-rentals" component={MyRentsalsScreen} />*/}
          <RentCarScreen/>
        </div>
      </Router>
    );
  }
}

export default App;
