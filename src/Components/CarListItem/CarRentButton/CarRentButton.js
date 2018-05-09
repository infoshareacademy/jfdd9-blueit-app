import React from 'react'
import './CarRentButton.css'
import {ReservationConsumer} from "../../contexts/Reservation";

class CarRentButton extends React.Component {
  render() {
    return (
      <ReservationConsumer>
        {
          ({ reservedCarIds, makeReservation, cancelReservation }) => (
            <button
              // id="rent"
              className={reservedCarIds.includes(this.props.carId) ? 'RentBtnReserved' : 'RentBtn'}

              // style={{ background: reservedCarIds.includes(this.props.carId) ? 'red' : 'black'}}
              onClick={() => reservedCarIds.includes(this.props.carId) ? cancelReservation(this.props.carId) : makeReservation(this.props.carId)}
            >
              RENT
            </button>
          )
        }
      </ReservationConsumer>
    )
  }
}

export default CarRentButton