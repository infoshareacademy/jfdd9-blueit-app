import React, {Component} from 'react';
import RentDateForm from "./RentDateForm/RentDateForm";

class RentCarScreen extends Component {



  render() {
    return (
      <RentDateForm rentDates={this.props.rentDates}/>
    )
  }
}

export default RentCarScreen