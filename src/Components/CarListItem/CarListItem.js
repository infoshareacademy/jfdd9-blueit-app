import React from 'react'
import CancelRentButton from "./CancelRentButton/CancelRentButton";
import CarRentButton from "./CarRentButton/CarRentButton";
import ShowMore from "./ShowMore/ShowMore";
import CarImg from "./CarImg/CarImg";


class CarListItem extends React.Component {
  render () {
    return (
      <CancelRentButton/>,
      <CarRentButton/>   ,
      <ShowMore/>,
      <CarImg/>

    )
  }
}

export default CarListItem