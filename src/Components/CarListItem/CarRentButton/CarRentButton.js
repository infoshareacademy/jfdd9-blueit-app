import React from 'react'
import './CarRentButton.css'
import {withReservation} from "../../contexts/Reservation";
import {withRouter} from 'react-router-dom'

class CarRentButton extends React.Component {
  render() {
    const {initReservation} = this.props
    return (
      <button
        className="ButtonBlue"
        onClick={() => {
          this.props.history.push(`/rent-confirm/${this.props.carId}`)
          initReservation(this.props.carId)
        }}
      >
        Rent
      </button>
    )
  }
}

export default withRouter(withReservation(CarRentButton))
