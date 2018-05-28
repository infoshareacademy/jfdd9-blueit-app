import React from 'react'
import './CarDeleteButton.css'
import {withRouter} from 'react-router-dom'
import {withCars} from "../../contexts/Cars";


class CarDeleteButton extends React.Component {
  render() {
    // const {cancelReservation} = this.props
    return (
      <button
        className="ButtonRed"
        onClick={ () => {
          this.props.deleteCar(this.props.carId)
        }}
      >
        Delete
      </button>
    )
  }
}

export default withRouter(withCars(CarDeleteButton))
