import React from 'react'
import './CarRentButton.css'
import {withReservation} from "../../contexts/Reservation";
import {withRouter} from 'react-router-dom'

class CarCancelRentButton extends React.Component {
  render() {
    // const {cancelReservation} = this.props
    return (
      <button
        className="ButtonRed"
        onClick={ () => {
          this.props.cancelReservation(this.props.reservationId, this.props.carId)
        }}
      >
        Cancel
      </button>
    )
  }
}

export default withRouter(withReservation(CarCancelRentButton))
