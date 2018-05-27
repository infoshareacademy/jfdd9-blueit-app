import React, {Component, Fragment} from 'react'
import {withReservation} from "./contexts/Reservation";
import './CarListItem/CarImg/CarImg.css'
import './MyRentsalsScreen.css'
import './CarListItem/CarRentButton/CarRentButton.css'
import SUV from './img/car-SUV.jpg'
import {withCars} from "./contexts/Cars";
import CarCancelRentButton from "./CarListItem/CarRentButton/CarCancelRentButton";
import 'font-awesome/css/font-awesome.min.css'

class MyRentsalsScreen extends Component {
  render() {
    console.log('MyRentals render (this.props)', this.props)
    const {cars, options, reservations} = this.props;
    return (
      <div>
        <div className="MyRentsalsSortContainer">
          <button
            className="ButtonBlue ButtonFilter"
            onClick={this.props.toggleSortReservationsByDates}
          >
            Sort by dates {this.props.reservationsSortingOrder === 'ASC' ?
            <i className="fas fa-arrow-alt-circle-up"/> : this.props.reservationsSortingOrder === 'DESC' ?
              <i className="fas fa-arrow-alt-circle-down"/> : ''}
          </button>
        </div>
        {
          reservations && reservations.length === 0 ?
            <h2>You don't have any active reservations.</h2> :
            reservations.map(reservation => {
              console.log('MyRentals - reservations', reservations)
              console.log('MyRentals - reservation', reservation)
              console.log('MyRentals - cars', cars)
              const car = cars && cars.find(car => car.id === reservation.carId)
              if (car === undefined) {
                return <p>Something went wrong. We are very sorry. Please contact site administrator at
                  admin@blueskycars.com.</p>
              }
              return (
                <Fragment key={reservation.id}>
                  <div className="CarImgContainer">
                    <div className="CarType">
                      <img src={(options[car.carbody] || {}).imageUrl || SUV} alt="car-compact" className="CarImg"/>

                      <div className="CarInfo">
                        <p>
                          <strong>{(options[car.carbody] || {}).label || 'Car Undefined'}</strong>
                          <span>{car.make}, {car.model}</span>
                        </p>
                        {
                          car.features.length === 0 ? '' : <p><strong>Features:</strong> {car.features.join(', ')}</p>
                        }
                        <p><strong>Rent start date: </strong>{reservation.startDate}, <strong>end
                          date: </strong>{reservation.endDate}</p>
                      </div>
                      <CarCancelRentButton reservationId={reservation.id} carId={car.id}/>
                    </div>
                  </div>
                </Fragment>
              )
            })
        }
      </div>
    )
  }
}

export default withCars(withReservation(MyRentsalsScreen))