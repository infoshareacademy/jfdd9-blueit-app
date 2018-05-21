import React, {Component, Fragment} from 'react'
import {withReservation} from "./contexts/Reservation";
import './CarListItem/CarImg/CarImg.css'
import CarRentButton from "./CarListItem/CarRentButton/CarRentButton";
import './MyRentsalsScreen.css'
import SUV from './img/car-SUV.jpg'
import {withCars} from "./contexts/Cars";
import CarCancelRentButton from "./CarListItem/CarRentButton/CarCancelRentButton";

class MyRentsalsScreen extends Component {
  render() {
    console.log('MyRentals render (this.props)', this.props)
    const {cars, reservedCarIds, options, reservations} = this.props;
    return (
      <div>
        {
          reservations && reservations.length === 0 ?
            <h2>You don't have any active reservations.</h2> :
            reservations.map(reservation => {
              const car = cars && cars.find(car => car.id === reservation.carId)
              if (car === undefined) {
                return <p>ni ma</p>
              }
              return (

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
                      <CarCancelRentButton reservationId={reservation.id}/>
                    </div>
                  </div>
                </Fragment>
              )
            })
        }
      </div>
    )
  }
}

export default withCars(withReservation(MyRentsalsScreen))