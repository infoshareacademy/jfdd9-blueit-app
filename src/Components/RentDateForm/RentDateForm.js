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
    this.setState({
      startDate: date,
      endDate: (this.state.endDate > moment(date).add(14, "days")) ?
        moment(date).add(14, "days") :
        date
    }, this.passToParent)
  };

  handleChangeEndDate = date => {
    console.log('handleChangeEndDate:', date)
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

  render() {
    return (
      <Fragment>
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
        {/*</div>*/}
        {/*<div className="datePicker__container">*/}
          <DatePicker
            className="RentDateForm"
            locale="en-gb"
            dateFormat="YYYY/MM/DD"
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
      </Fragment>
    )
  }
}

export default withReservation(RentDateForm)