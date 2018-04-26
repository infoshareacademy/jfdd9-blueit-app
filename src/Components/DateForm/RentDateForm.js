import React, {Component} from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'

class RentDateForm extends Component {

  state = {
    startDate: moment(),
    endDate: moment()
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

  render() {
    return (
      <div>
        <DatePicker
          dateFormat="YYYY/MM/DD"
          locale="en-gb"
          placeholderText="Weeks start on Monday"
          todayButton={"Today"}
          selected={this.state.startDate}
          onChange={this.handleChangeStartDate}
          minDate={moment()}
          maxDate={moment().add(1, "month")}
          isClearable={true}

        />
        <DatePicker placeholderText="End date"
                    dateFormat="YYYY/MM/DD"
                    todayButton={"Today"}
                    selected={this.state.endDate}
                    onChange={this.handleChangeEndDate}
                    minDate={moment()}
                    maxDate={moment().add(14, "days")}
        />
      </div>
    )
  }
}

export default RentDateForm