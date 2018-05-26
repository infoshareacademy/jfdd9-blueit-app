import React, {Component, Fragment} from 'react'
import SearchInput, {createFilter} from 'react-search-input'
import './SearchEngine.css'
import CarFeatures from "../CarFeatures/CarFeatures";
import CarImg from "../CarListItem/CarImg/CarImg";
import {withSearch} from "../contexts/Search";
import {withCars} from "../contexts/Cars";
import RentDateForm from "../RentDateForm/RentDateForm";
import {withReservation} from "../contexts/Reservation";
import moment from 'moment'


const KEYS_TO_FILTERS = [
  'make',
  'model',
  'productionYear',
  'carbody'
]

class SearchEngine extends Component {

  clearFilters = () =>{
    this.props.clearSearchState()
    this.props.clearReservationDates()
  }

  render() {
    console.log('SearchEngine Cars object', Object.values(this.props.cars))

    const {startDate: startDateFromDatePicker, endDate: endDateFromDatePicker} = this.props
    console.log('SearchEngine dates from reservation', startDateFromDatePicker, endDateFromDatePicker)

    const filteredCars = this.props.cars.filter(
      createFilter(this.props.searchTerm, KEYS_TO_FILTERS)
    ).filter(
      car => this.props.selectedOptions.every(
        option =>
          car.features && car.features.includes(option))
    ).filter(car => {
      if (!car.reservedFor || !startDateFromDatePicker) {
        return true
      }
      const reservations = Object.values(car.reservedFor)
      //console.log(moment(reservations[0].endDate).format())
      //debugger
      return reservations.every(
        reservation => {
        console.log('MOMENT', moment(reservation.endDate))
        return moment(reservation.endDate).isBefore(startDateFromDatePicker) || moment(reservation.startDate).isAfter(endDateFromDatePicker)
        }
      )
    })


    return (
      <Fragment>
        <button
          onClick={this.clearFilters}
        >
          Clear filters
        </button>
        <RentDateForm rentDates={this.props.rentDates}/>
        <SearchInput
          placeholder={"Type make, model and/or year of production here"}
          className="search-input"
          onChange={this.props.searchUpdated}
          value={this.props.searchTerm}
        />
        <CarFeatures
          selectedOptions={this.props.selectedOptions}
          toggleOption={this.props.toggleOption}
        />
        <CarImg
          cars={filteredCars}
        />
      </Fragment>
    )
  }


}

export default withReservation(withCars(withSearch(SearchEngine)))