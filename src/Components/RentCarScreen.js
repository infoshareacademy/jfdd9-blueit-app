import React, {Component, Fragment} from 'react';
import RentDateForm from "./RentDateForm/RentDateForm";
import CarFeatures from "./CarFeatures/CarFeatures";
import CarListItem from "./CarListItem/CarListItem";

class RentCarScreen extends Component {
  render() {
    return (
      <Fragment>
        <RentDateForm/>
        <CarFeatures/>
        <CarListItem/>
      </Fragment>
    )
  }
}

export default RentCarScreen