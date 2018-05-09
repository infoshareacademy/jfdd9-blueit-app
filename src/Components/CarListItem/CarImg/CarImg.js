import React from 'react'
import './CarImg.css'
import SUV from '../../img/car-SUV.jpg'
import fullsize from '../../img/car-fullsize.jpg'
import compact from '../../img/car-compact.jpg'
import minivan from '../../img/car-minivan.jpg'
import CarRentButton from "../CarRentButton/CarRentButton";
import CancelRentButton from "../../CancelRentButton/CancelRentButton";

const options = {
  minivan: {
    label: 'MINIVAN ',
    imageUrl: minivan
  },
  suv: {
    label: 'SUV ',
    imageUrl: SUV
  },
compact: {
  label: 'COMPACT ',
    imageUrl: compact
},
fullsize: {
  label: 'FULLSIZE ',
    imageUrl: fullsize
}

};


class CarImg extends React.Component {
  render() {
    return (
        <div className="CarImgContainer">
          {
            this.props.cars.map(
              car => (
                <div className="CarType">
                  <img src={(options[car.carbody] || {}).imageUrl || SUV} alt="car-compact" className="CarImg"/>
                  <div className="CarInfo">
                  <p>
                    <strong>{(options[car.carbody] || {}).label || 'Car Undefined'}</strong>
                    <span>{car.make},{car.model}</span>
                  </p>
                    <p> {car.features.join(', ')}</p>
                  </div>
                    <CarRentButton/>
                    {/*<CancelRentButton/>*/}
                </div>

              )
            )
          }
        </div>
     )
  }
}

export default CarImg
