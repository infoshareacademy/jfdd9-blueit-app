import React, {Component, Fragment} from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import 'moment/locale/en-gb'
import './RentDateForm.css'
import {withReservation} from "../contexts/Reservation";

class RentDateForm extends Component {

  state = {
    startDate: null,
    endDate: null
  };

  static getDerivedStateFromProps(nextProps, currentState) {
    return {
      startDate: nextProps.startDate,
      endDate: nextProps.endDate
    }
  }

  handleChangeStartDate = date => {
    this.props.rentDates(
      date,
      (this.state.endDate > moment(date).add(14, "days")) ?
        moment(date).add(14, "days") :
        date
    )
  };

  handleChangeEndDate = date => {
    this.props.rentDates(
      this.state.startDate,
      date
    )
  };

  isStartDateEmpty = () => {
    return this.state.startDate === null
  };

  render() {
    return (
      <Fragment>
        <div className="datePicker__container">
          <DatePicker
            selectsStart
            className="RentDateForm"
            locale="en-gb"
            dateFormat="YYYY-MM-DD"
            placeholderText="Start date"
            todayButton={"Today"}
            minDate={moment()}
            maxDate={moment().add(1, "month")}
            selected={this.state.startDate}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeStartDate}
            // withPortal
            fixedHeight
          />
          <DatePicker
            selectsEnd
            className={this.state.startDate ? 'RentDateForm' : 'RentDateForm__Disabled'}
            locale="en-gb"
            dateFormat="YYYY-MM-DD"
            placeholderText="End date"
            minDate={moment(this.state.startDate)}
            maxDate={moment(this.state.startDate).add(14, "days")}
            selected={this.state.startDate === null ?
              undefined :
              (this.state.startDate > this.state.endDate) ?
                this.state.startDate :
                (this.state.endDate > moment(this.state.startDate).add(14, "days")) ?
                  moment(this.state.startDate).add(14, "days") :
                  this.state.endDate}
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
      </Fragment>
    )
  }
}

export default withReservation(RentDateForm)