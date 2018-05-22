import React from 'react'
import './CarRentButton.css'
import {withReservation} from "../../contexts/Reservation";
import {withRouter} from 'react-router-dom'

class CarCancelRentButton extends React.Component {
  render() {
    // const {cancelReservation} = this.props
    return (
      <button
        className="RentBtnReserved"
        onClick={ () => {
          console.log('ID rezerwacji do usuniecia:', this.props.reservationId)
          this.props.cancelReservation(this.props.reservationId)
        }}
      >
        Cancel
      </button>
    )
  }
}

export default withRouter(withReservation(CarCancelRentButton))
