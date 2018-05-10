import React, {Component, Fragment} from 'react'
import {ReservationConsumer} from "./contexts/Reservation";
import './CarListItem/CarImg/CarImg.css'
import CarRentButton from "./CarListItem/CarRentButton/CarRentButton";

class MyRentsalsScreen extends Component {
  render() {
    return (
      <ReservationConsumer>
        {
          ({cars, reservedCarIds, makeReservation, cancelReservation}) => (

            cars.filter(car => (
              reservedCarIds.includes(car.id)
            )).map(car => (
              <Fragment>
                <div className="CarImgContainer">
                  <div className="CarType">
                    <div className="CarInfo">
                      <p>
                        {/*<strong>{(options[car.carbody] || {}).label || 'Car Undefined'}</strong>*/}
                        <span><strong>{car.make}, {car.model}</strong></span>
                      </p>
                      <p> {car.features.join(', ')}</p>
                    </div>
                    <CarRentButton carId={car.id}/>
                  </div>
                </div>
              </Fragment>
            ))
          )
        }
      </ReservationConsumer>
    )
  }
}

export default MyRentsalsScreen