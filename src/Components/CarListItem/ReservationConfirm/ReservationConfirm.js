import React, {Component, Fragment} from 'react'
import {withReservation} from "../../contexts/Reservation";
import moment from "moment/moment";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'moment/locale/en-gb'
import '../../RentDateForm/RentDateForm.css'
import '../../CarListItem/CarRentButton/CarRentButton.css'
import {withCars} from "../../contexts/Cars";
import CarItem from "../CarItem";
import withRouter from "react-router-dom/es/withRouter";
import Link from "react-router-dom/es/Link";
import MyRentsalsScreen from "../../MyRentsalsScreen";

class ReservationConfirm extends Component {

  state = {
    carId: null,
    startDate: null,
    endDate: null,
    place: null,
    noRentBtn: true
  }

  static getDerivedStateFromProps(nextProps, currentState) {
    console.log('ReservationConfirm getDerivedStateFromProps, (nextProps):', nextProps)
    return {
      ...nextProps.currentReservation,
      startDate: nextProps.startDate,
      endDate: nextProps.endDate
    }
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  handleChangeStartDate = date => {
    this.setState({
      startDate: date,
      // endDate: (this.state.endDate < this.state.startDate) ? this.state.startDate : this.state.endDate
    }, this.passToParent)
  };

  handleChangeEndDate = date => {
    this.setState({
      endDate: date
    }, this.passToParent)
  };

  isStartDateEmpty = () => {
    return this.state.startDate === null
  };

  passToParent = () => {
    this.props.rentDates(this.state.startDate, this.state.endDate)
  };

  // componentDidMount() {
  //   this.setState({
  //     carId: 5
  //   })
  // }


  render() {
    console.log('ReservationConfirm render (this.props)', this.props)
    console.log('Router id:', this.props.match.params.carId)
    console.log(this.state)
    return (
      <Fragment>

        <h2>Rental summary</h2>

        {/*<CarItem car={this.props.cars.find(car =>*/}
        {/*car.id === this.props.currentReservation.carId*/}
        {/*)}/>*/}

        {/*<CarItem car={this.props.cars.find(car =>*/}
        {/*car.id === this.props.match.params.carId*/}
        {/*)}/>*/}

        <CarItem noRentBtn={this.state.noRentBtn}
                 car={this.props.cars.find(car =>
                   car.id === this.state.carId
                 )}/>

        <form onSubmit={this.handleSubmit}>

          <div className="datePicker__container">
            <DatePicker
              className="RentDateForm"
              locale="en-gb"
              dateFormat="YYYY/MM/DD"
              placeholderText="Start date"
              todayButton={"Today"}
              minDate={moment()}
              maxDate={moment().add(1, "month")}
              selected={this.state.startDate}
              selectsStart
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onChange={this.handleChangeStartDate}
              // withPortal
              fixedHeight
            />

            <DatePicker
              className="RentDateForm"
              locale="en-gb"
              dateFormat="YYYY/MM/DD"
              placeholderText="End date"
              minDate={moment(this.state.startDate)}
              maxDate={moment(this.state.startDate).add(14, "days")}
              selected={this.state.endDate}
              selectsEnd
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onChange={this.handleChangeEndDate}
              disabled={this.isStartDateEmpty()}
              // withPortal
              fixedHeight
            >
              <div className="CalendarDateTo">
                Maximum rent period is 14 days
              </div>
            </DatePicker>
          </div>

          <div className="PlaceContainer">
            <input
              placeholder="Choose the rent place"
              className="RentDateForm"
            />
          </div>
          <div className="ReservationConfirmButtonsContainer">
            <Link to="/">
              <button
                className="RentBtnReserved"
              >
                Cancel
              </button>
            </Link>

            <Link to="/my-rentals-screen">
              <button
                className="RentBtn"
                onClick={
                  () => {
                    this.props.makeReservation(this.state)
                  }
                }
              >
                Confirm
              </button>
            </Link>
          </div>

        </form>
      </Fragment>
    )
  }
}

export default withRouter(withCars(withReservation(ReservationConfirm)))