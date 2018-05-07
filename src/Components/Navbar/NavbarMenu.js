import React, {Component} from 'react';
import './NabarMenu.css'


class NavbarMenu extends Component {


  render() {

    return (
      <div className='menu__container'>

        <div className='menu__button active'>Rent a car</div>
        <div className='menu__button__divider'></div>
        <div className='menu__button'>My rentals</div>

      </div>
    )
  }
}


export default NavbarMenu