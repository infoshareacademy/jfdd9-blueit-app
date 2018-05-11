import React, {Component, Fragment} from 'react';
import RentDateForm from "./RentDateForm/RentDateForm";
import SearchEngine from "./SearchEngine/SearchEngine";

class RentCarScreen extends Component {
  render() {
    return (
      <Fragment>
        <RentDateForm rentDates={this.props.rentDates}/>
        <SearchEngine/>
      </Fragment>
    )
  }
}

export default RentCarScreen