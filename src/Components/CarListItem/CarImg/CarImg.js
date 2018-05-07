import React from 'react'
import './CarImg.css'
import SUV from '../../img/car-SUV.jpg'
import fullsize from '../../img/car-fullsize.jpg'
import compact from '../../img/car-compact.jpg'
import minivan from '../../img/car-minivan.jpg'
import CarRentButton from "../CarRentButton/CarRentButton";

class CarImg extends React.Component {
  render() {
    return (
      <div>
        <ul className="CarImageList">
          <li><img src={compact} id="carCompactImg" alt="car-compact" className="CarImg"/>
            <span>compact car</span><CarRentButton/>
          </li>
          <li><img src={fullsize} id="carFullsizeImg" alt="car-fullsize" className="CarImg"/>
            <span>fullsize car</span><CarRentButton/>
          </li>
          <li><img src={SUV} id="carSUVImg" alt="car-suv" className="CarImg"/>
            <span>sports utility vehicle</span><CarRentButton/>
          </li>
          <li><img src={minivan} id="carMinivanImg" alt="car-minivan" className="CarImg"/>
            <span>minivan</span><CarRentButton/>
          </li>

        </ul>
      </div>
    )
  }
}

export default CarImg
