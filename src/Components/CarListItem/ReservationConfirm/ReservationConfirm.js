import React, {Component, Fragment} from 'react'
import {withReservation} from "../../contexts/Reservation";
import moment from "moment/moment";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'moment/locale/en-gb'
import '../../RentDateForm/RentDateForm.css'

class ReservationConfirm extends Component {

  state = {
    carId: null,
    dateFrom: null,
    dateTo: null,
    place: null
  }

  static getDerivedStateFromProps(nextProps, currentState) {
    return nextProps.currentReservation
  }

  handleSubmit = event => {
    event.preventDefault()

    this.props.makeReservation(this.state)
  }


  render() {
    return (
      <Fragment>
        <p>{this.props.carId}</p>

        <div className="datePicker__container">
          <DatePicker
            className="RentDateForm"
            locale="en-gb"
            dateFormat="YYYY/MM/DD"
            placeholderText="Start date"
            todayButton={"Today"}
            minDate={moment()}
            maxDate={moment().add(1, "month")}
            selected={this.state.dateFrom}
            selectsStart
            startDate={this.state.dateFrom}
            endDate={this.state.dateTo}
            onChange={this.handleChangeStartDate}
            // withPortal
            fixedHeight
          />

          <DatePicker
            className="RentDateForm"
            locale="en-gb"
            dateFormat="YYYY/MM/DD"
            placeholderText="End date"
            minDate={moment(this.state.dateFrom)}
            maxDate={moment(this.state.dateFrom).add(14, "days")}
            selected={this.state.dateTo}
            selectsEnd
            startDate={this.state.dateFrom}
            endDate={this.state.dateTo}
            onChange={this.handleChangeEndDate}
            // disabled={this.isStartDateEmpty()}
            // withPortal
            fixedHeight
          >
            <div className="CalendarDateTo">
              Maximum rent period is 14 days
            </div>
          </DatePicker>
        </div>
      </Fragment>
    )
  }
}

export default withReservation(ReservationConfirm)