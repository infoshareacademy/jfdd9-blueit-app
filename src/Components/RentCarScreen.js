import React, {Component, Fragment} from 'react';
import RentDateForm from "./RentDateForm/RentDateForm";
import CarFeatures from "./CarFeatures/CarFeatures";
import CarListItem from "./CarListItem/CarListItem";
import SearchEngine from "./SearchEngine/SearchEngine";


class RentCarScreen extends Component {
  render() {
    return (
      <Fragment>
        <RentDateForm rentDates={this.props.rentDates}/>
        <SearchEngine/>
        <CarListItem/>
      </Fragment>
    )
  }
}

export default RentCarScreen