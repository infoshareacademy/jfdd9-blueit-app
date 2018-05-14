import React, {Component} from 'react';
import './NabarMenu.css'

import {NavLink} from 'react-router-dom'


class NavbarMenu extends Component {


  render() {

    return (
      <div className='menu__container'>

        <NavLink to="/" exact className='menu__button'>RENT A CAR</NavLink>
        <NavLink to="/my-rentals-screen" className='menu__button'>MY RENTALS</NavLink>

      </div>
    )
  }
}


export default NavbarMenu