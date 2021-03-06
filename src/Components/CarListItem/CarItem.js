import React, {Component} from 'react'
import '../CarListItem/CarImg/CarImg.css'
import fullsize from '../img/car-fullsize.jpg'
import compact from '../img/car-compact.jpg'
import minivan from '../img/car-minivan.jpg'
import SUV from '../img/car-SUV.jpg'
import CarRentButton from "./CarRentButton/CarRentButton";
import CarDeleteButton from "./CarDeleteButton/CarDeleteButton"
import {withUser} from "../contexts/User";

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


class CarItem extends Component {
  render() {
    const {car} = this.props

    return (
      <div key={car.id}
           className="CarType"
      >
        <img src={(options[car.carbody] || {}).imageUrl || SUV} alt="car-compact" className="CarImg"/>
        <div className="CarInfo">
          <p>
            <strong>{(options[car.carbody] || {}).label || 'Car Undefined'}</strong>
            <span>{car.make}, {car.model}, {car.productionYear}</span>
          </p>
          <p>{car.location}</p>
          {car.features && car.features.length === 0 || !car.features  ? '' :
            <p><strong>Features:</strong>{car.features && car.features.join(', ')}</p>}
        </div>
        <div className={this.props.user.uid !== car.ownerId
          ? "buttonSectionSingle"
          : "buttonSection"}>
          {this.props.noRentBtn === true ? <div></div> : <CarRentButton carId={car.id}/>}
          {this.props.user.uid !== car.ownerId ? <div></div> : <CarDeleteButton carId={car.id}/>}
        </div>
      </div>
    )
  }
}

export default withUser(CarItem)