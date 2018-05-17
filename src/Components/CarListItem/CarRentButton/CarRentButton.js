import React from 'react'
import './CarRentButton.css'
import {withReservation} from "../../contexts/Reservation";

class CarRentButton extends React.Component {
  render() {
    const {reservedCarIds, cancelReservation, initReservation} = this.props
    return (
      <button
        className={reservedCarIds.includes(this.props.carId) ? 'RentBtnReserved' : 'RentBtn'}
        onClick={() => initReservation(this.props.carId)}
      >
        {reservedCarIds.includes(this.props.carId) ? 'Cancel' : 'Rent'}
      </button>
    )
  }
}

export default withReservation(CarRentButton)
