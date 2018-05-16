import React from 'react'
import './CarRentButton.css'
import {withReservation} from "../../contexts/Reservation";

class CarRentButton extends React.Component {
  render() {
    const {reservedCarIds, cancelReservation, makeReservation} = this.props
    return (
      <button
        className={reservedCarIds.includes(this.props.carId) ? 'RentBtnReserved' : 'RentBtn'}
        onClick={() => reservedCarIds.includes(this.props.carId) ? cancelReservation(this.props.carId) : makeReservation(this.props.carId)}
      >
        {reservedCarIds.includes(this.props.carId) ? 'Cancel' : 'Rent'}
      </button>
    )
  }
}

export default withReservation(CarRentButton)
