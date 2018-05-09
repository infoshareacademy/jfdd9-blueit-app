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
    label: 'MINIVAN',
    imageUrl: minivan
  },
  suv: {
    label: 'SUV',
    imageUrl: SUV
  },
compact: {
  label: 'COMPACT',
    imageUrl: compact
},
fullsize: {
  label: 'FULLSIZE',
    imageUrl: fullsize
}

};


class CarImg extends React.Component {
  render() {
    return (
      <div className="CarImgListContainer">
        <ul className="CarImgList">
          {
            this.props.cars.map(
              car => (
                <li className="carType">
                  <img src={(options[car.carbody] || {}).imageUrl || SUV} alt="car-compact" className="CarImg"/>
                  <div   >
                    <div>
                  <span>
                    <strong>{(options[car.carbody] || {}).label || 'Foo'}</strong>
                  </span>
                    </div>
                      <div>
  {car.make}, {car.model}, {car.features.join(', ')}</div>
                    </div>
                  <CarRentButton/><CancelRentButton/>
                </li>
              )
            )
          }
        </ul>
      </div>
    )
  }
}

export default CarImg
