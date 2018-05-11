import React, {Component, Fragment} from 'react'
import {withReservation} from "./contexts/Reservation";
import './CarListItem/CarImg/CarImg.css'
import CarRentButton from "./CarListItem/CarRentButton/CarRentButton";
import './MyRentsalsScreen.css'
import SUV from './img/car-SUV.jpg'

class MyRentsalsScreen extends Component {
  render() {
    const {cars, reservedCarIds, options} = this.props;
    return (
      <div>
        {
          reservedCarIds.length === 1 ?
            <h2>You don't have any active reservations.</h2> :
            cars.filter(car => (
              reservedCarIds.includes(car.id)
            )).map(car => (

              <Fragment key={car.id}>
                <div className="CarImgContainer">
                  <div className="CarType">
                    <img src={(options[car.carbody] || {}).imageUrl || SUV} alt="car-compact" className="CarImg"/>

                    <div className="CarInfo">
                      <p>
                        <strong>{(options[car.carbody] || {}).label || 'Car Undefined'}</strong>
                        <span>{car.make}, {car.model}</span>
                      </p>
                      {car.features.length === 0 ? '' : <p><strong>Features:</strong> {car.features.join(', ')}</p>}
                    </div>
                    <CarRentButton carId={car.id}/>
                  </div>
                </div>
              </Fragment>
            ))
        }
      </div>
    )
  }
}

export default withReservation(MyRentsalsScreen)