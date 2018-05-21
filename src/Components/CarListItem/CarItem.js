import React, {Component} from 'react'
import '../CarListItem/CarImg/CarImg.css'
import fullsize from '../img/car-fullsize.jpg'
import compact from '../img/car-compact.jpg'
import minivan from '../img/car-minivan.jpg'
import SUV from '../img/car-SUV.jpg'
import CarRentButton from "./CarRentButton/CarRentButton";
import Link from "react-router-dom/es/Link";

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
    console.log('CarItem render (this.props.car)', car)
    if(typeof car === 'undefined') {
      return (
        <Link to='/'/>
      )
    } else return (
      <div key={car.id} className="CarType" onClick={() => console.log('Kliknięte ID samochodu:', car.id)}>
        <img src={(options[car.carbody] || {}).imageUrl || SUV} alt="car-compact" className="CarImg"/>
        <div className="CarInfo">
          <p>
            <strong>{(options[car.carbody] || {}).label || 'Car Undefined'}</strong>
            <span>{car.make}, {car.model}, {car.productionYear}</span>
          </p>
          {car.features && car.features.length === 0 ? '' : <p><strong>Features:</strong> {car.features && car.features.join(', ')}</p>}
        </div>
        {this.props.noRentBtn === true ? <div></div> : <CarRentButton carId={car.id}/>}

      </div>
    )
  }
}

export default CarItem