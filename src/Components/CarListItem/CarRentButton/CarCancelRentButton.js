import React from 'react'
import './CarRentButton.css'
import {withReservation} from "../../contexts/Reservation";
import {withRouter} from 'react-router-dom'

class CarCancelRentButton extends React.Component {
  render() {
    const {cancelReservation} = this.props
    return (
      <button
        className="RentBtnReserved"
        onClick={() => {
          cancelReservation(this.props.carId)
        }}
      >
        Cancel
      </button>
    )
  }
}

export default withRouter(withReservation(CarCancelRentButton))
