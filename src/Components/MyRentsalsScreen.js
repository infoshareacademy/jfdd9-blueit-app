import React, {Component} from 'react'
import {ReservationConsumer} from "./contexts/Reservation";
import cars from '././SearchEngine/cars'

class MyRentsalsScreen extends Component {
  render() {
    return (
      <ReservationConsumer>
        {
          ({cars, reservedCarIds, makeReservation, cancelReservation}) => (

"zupa"

          )
        }
      </ReservationConsumer>
    )
  }
}

export default MyRentsalsScreen