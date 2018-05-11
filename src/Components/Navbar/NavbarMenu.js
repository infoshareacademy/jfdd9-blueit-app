import React, {Component} from 'react';
import './NabarMenu.css'

import {Link} from 'react-router-dom'


class NavbarMenu extends Component {


  render() {

    return (
      <div className='menu__container'>

        <div className = 'menu__button active'><Link to="/rent-car-screen">Rent a car</Link></div>
        <div className = 'menu__button'><Link to="my-rentals-screen">My rentals</Link></div>

      </div>
    )
  }
}


export default NavbarMenu