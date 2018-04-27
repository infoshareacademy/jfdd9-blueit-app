import React, {Component} from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import 'moment/locale/en-gb'

class RentDateForm extends Component {

  state = {
    startDate: null,
    endDate: null
  };

  handleChangeStartDate = date => {
    this.setState({
      startDate: date
    })
  };

  handleChangeEndDate = date => {
    this.setState({
      endDate: date
    })
  };

  isStartDateEmpty = () => {
    return this.state.startDate === null
  };

  render() {
    return (
      <div>

        <DatePicker
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
          withPortal
          fixedHeight
        />

        <DatePicker
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
          withPortal
          fixedHeight
        >
          <div style={{color: 'red', textAlign: 'center', fontSize: '1.5em'}}>
            Maximum rent time is 14 days.
          </div>
        </DatePicker>


      </div>
    )
  }
}

export default RentDateForm