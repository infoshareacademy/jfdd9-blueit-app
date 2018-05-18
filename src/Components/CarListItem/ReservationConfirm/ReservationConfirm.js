import React, {Component, Fragment} from 'react'
import {withReservation} from "../../contexts/Reservation";
import moment from "moment/moment";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'moment/locale/en-gb'
import '../../RentDateForm/RentDateForm.css'
import '../../CarListItem/CarRentButton/CarRentButton.css'

class ReservationConfirm extends Component {

  state = {
    carId: null,
    startDate: null,
    endDate: null,
    place: null
  }

  static getDerivedStateFromProps(nextProps, currentState) {
    return {
      ...nextProps.currentReservation,
      startDate: nextProps.startDate,
      endDate: nextProps.endDate
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    this.props.makeReservation(this.state)
  }

  handleChangeStartDate = date => {
    this.setState({
      startDate: date
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

  // passToParent = () => {
  //   this.props.rentDates(this.state.startDate, this.state.endDate)
  // };


  render() {
    return (
      <Fragment>
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

          <button
            className="RentBtnReserved"
            onClick={this.props.cancelReservation}
          >
            Cancel
          </button>

          <button
            className="RentBtn"
            onClick={this.props.makeReservation}
          >
            Confirm
          </button>

        </form>
      </Fragment>
    )
  }
}

export default withReservation(ReservationConfirm)