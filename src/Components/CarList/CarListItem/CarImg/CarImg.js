import React from 'react'
// import './CarRentButton.css'
import SUV from '../../../img/car-SUV.jpg'
import fullsize from '../../../img/car-fullsize.jpg'
// import compact from '../../../img/car-compact.jpg'
import minivan from '../../../img/car-minivan.jpg'

class CarImg extends React.Component {
  render() {
    return (
      <div className="CarImg">
        <div><img src={SUV}/></div>
        {/*<div><img src={compact}/></div>*/}
        <div><img src={minivan}/></div>
        <div><img src={fullsize}/></div>


      </div>
    )
  }
}

export default CarImg