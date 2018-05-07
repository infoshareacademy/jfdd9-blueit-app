import React from 'react'
import './CarImg.css'
import SUV from '../../img/car-SUV.jpg'
import fullsize from '../../img/car-fullsize.jpg'
import compact from '../../img/car-compact.jpg'
import minivan from '../../img/car-minivan.jpg'

class CarImg extends React.Component {
  render() {
    return (
      <div className="CarImg">
        <div className="CarImg-img"><img src={compact} alt="car-compact"/></div>
        <div className="CarImg-img"><img src={fullsize} alt="car-fullsize"/></div>
        <div className="CarImg-img"><img src={SUV} alt="car-suv"/></div>
        <div className="CarImg-img"><img src={minivan} alt="car-minivan"/></div>
      </div>
    )
  }
}

export default CarImg
