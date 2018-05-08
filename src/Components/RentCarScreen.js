import React, {Component, Fragment} from 'react';
import RentDateForm from "./RentDateForm/RentDateForm";
import CarFeatures from "./DateForm/CarFeatures/CarFeatures";

class RentCarScreen extends Component {
  render() {
    return (
      <Fragment>
        <RentDateForm/>
        <CarFeatures/>
      </Fragment>
    )
  }
}

export default RentCarScreen