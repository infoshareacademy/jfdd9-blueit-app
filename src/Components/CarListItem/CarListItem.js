import React, {Component, Fragment} from 'react'
import CarRentButton from "./CarRentButton/CarRentButton";
import ShowMore from "./ShowMore/ShowMore";
import CarImg from "./CarImg/CarImg";

class CarListItem extends Component {
  render() {
    return (
      <Fragment>


        <ShowMore/>
        <CarRentButton carId={this.props.car.id}/>
      </Fragment>

    )
  }
}

export default CarListItem