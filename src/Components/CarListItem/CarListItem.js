import React, {Component, Fragment} from 'react'
import CarRentButton from "./CarRentButton/CarRentButton";
import ShowMore from "./ShowMore/ShowMore";
import CarImg from "./CarImg/CarImg";

class CarListItem extends Component {
  render() {
    return (
      <Fragment>
        <CarImg/>

        <ShowMore/>
      </Fragment>

    )
  }
}

export default CarListItem