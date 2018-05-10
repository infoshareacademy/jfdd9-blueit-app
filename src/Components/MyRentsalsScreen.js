import React, {Component} from 'react'
import {ReservationConsumer} from "./contexts/Reservation";

class MyRentsalsScreen extends Component {
  render() {
    return (
      <ReservationConsumer>
        {
          ({cars, reservedCarIds, makeReservation, cancelReservation}) => (

            cars.filter(car => (
                reservedCarIds.includes(car.id)
              )
            ).map(car => (
              <p>
                {car.make}
              </p>
            ))

          )
        }
      </ReservationConsumer>
    )
  }
}

export default MyRentsalsScreen