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
      <div className="CarImgListContainer">
        <ul className="CarImgList">
          <li className="carType"><img src={compact} id="carCompactImg" alt="car-compact" className="CarImg"/>
            <span><strong>COMPACT CAR </strong>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
              Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</span>
            <CarRentButton/>
          </li>
          <li className="carType"><img src={fullsize} id="carFullsizeImg" alt="car-fullsize" className="CarImg"/>
            <span><strong>FULLSIZE CAR </strong>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
              Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</span>
            <CarRentButton/>
          </li>
          <li className="carType"><img src={SUV} id="carSUVImg" alt="car-suv" className="CarImg"/>
            <span><strong>SPORTS UTILITY VEHICLE </strong>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
              Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</span>
            <CarRentButton/>
          </li>
          <li className="carType"><img src={minivan} id="carMinivanImg" alt="car-minivan" className="CarImg"/>
            <span><strong>MINIVAN </strong>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
              Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</span>
            <CarRentButton/>
          </li>
        </ul>
      </div>
    )
  }
}

export default CarImg
