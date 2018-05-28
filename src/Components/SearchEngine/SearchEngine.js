import React, {Component, Fragment} from 'react'
import SearchInput, {createFilter} from 'react-search-input'
import CarFeatures from "../CarFeatures/CarFeatures";
import CarImg from "../CarListItem/CarImg/CarImg";
import {withSearch} from "../contexts/Search";
import {withCars} from "../contexts/Cars";
import RentDateForm from "../RentDateForm/RentDateForm";
import {withReservation} from "../contexts/Reservation";
import moment from 'moment'
import CarOwned from '../CarOwned/CarOwned'
import {withUser} from "../contexts/User";
import './SearchEngine.css'


const KEYS_TO_FILTERS = [
  'make',
  'model',
  'productionYear',
  'carbody'
]

class SearchEngine extends Component {

  clearFilters = () => {
    this.props.clearSearchState()
    this.props.clearReservationDates()
  }

  render() {
    console.log('SearchEngine Cars object', Object.values(this.props.cars))

    const {startDate: startDateFromDatePicker, endDate: endDateFromDatePicker} = this.props
    console.log('SearchEngine dates from reservation', startDateFromDatePicker, endDateFromDatePicker)

    const filteredCars = this.props.cars.filter(
      car => this.props.isOwned ? car.ownerId === this.props.user.uid : true
    ).filter(
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
        <div style={{ background: 'rgb(59, 65, 122)', paddingBottom:5}}>
        <h2 className="H2__SectionBar">Filters</h2>
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
          toogleOwned={this.props.toggleOwned}
        />
        </div>
        <div className='lastFilters'>
          <CarOwned/>
          <div className='divider'>

          </div>
          <button
            className="ButtonRed ButtonClearFilters"
            onClick={this.clearFilters}
          >
            Clear filters
          </button>
        </div>

        <h2 className="H2__SectionBar">Available cars</h2>
        <CarImg
          cars={filteredCars}
        />
      </Fragment>
    )
  }


}

export default withUser(withReservation(withCars(withSearch(SearchEngine))))