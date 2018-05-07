import React, {Component, Fragment} from 'react';
import RentDateForm from "./RentDateForm";
import CarFeatures from "./CarFeatures";

class RentCarScreenView extends Component {
  render() {
    return (
      <Fragment>
        <RentDateForm/>
        <CarFeatures/>
      </Fragment>
    )
  }
}

export default RentCarScreenView