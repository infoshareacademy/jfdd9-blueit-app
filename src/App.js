import React, {Component} from 'react';
import './App.css';
import NavbarMenu from './components/Navbar/NavbarMenu'
import CarList from "./components/CarList/CarList";


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <NavbarMenu/>

        </nav>
        <CarList/>

      </div>
    );
  }
}

export default App;
