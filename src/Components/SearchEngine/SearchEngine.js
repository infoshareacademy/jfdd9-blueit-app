import React, {Component, Fragment} from 'react'
import SearchInput, {createFilter} from 'react-search-input'
import './SearchEngine.css'
import CarFeatures from "../CarFeatures/CarFeatures";
import CarImg from "../CarListItem/CarImg/CarImg";
import {withSearch} from "../contexts/Search";
import {withCars} from "../contexts/Cars";
import RentDateForm from "../RentDateForm/RentDateForm";


const KEYS_TO_FILTERS = [
  'make',
  'model',
  'productionYear',
  'carbody'
]

/*

var obj = {

  "cars" : {

    "-LD1xCEaXVQJ1BgzvtP1" : {

      "carbody" : "compact",

      "features" : [ "Pet friendly", "Autonomous car", "Family car", "Private bathroom", "Child care" ],

      "id" : 1,

      "make" : "Buick",

      "model" : "Enclave",

      "productionYear" : 2011,

      "reservedFor" : {

        "-LD8XN9hN0yotXd424AF" : {

          "endDate" : "2018-05-27",

          "startDate" : "2018-05-23"

        }

      }

    },

    "-LD1xCEdc10U1QO_FYvQ" : {

      "carbody" : "minivan",

      "features" : [ "Tour guide", "Cable TV", "Sports car" ],

      "id" : 2,

      "make" : "Audi",

      "model" : "S8",

      "productionYear" : 2001,

      "reservedFor" : {

        "-LD8fBnL6KdCgHugYgAe" : {

          "endDate" : "2018-05-30",

          "startDate" : "2018-05-28"

        }

      }

    }
  }
}


var obj2 = Object.values(obj.cars).filter(
  car => car.reservedFor
)

var obj3 = Object.values(obj2).map(
  ({reservedFor}) => reservedFor
)

var obj4 = [].concat.apply([], obj3.map(
  obj => Object.values(obj)
))

obj4[0].startDate
*/


class SearchEngine extends Component {

  render() {
    console.log('SearchEngine Cars object', this.props.cars)

    const filteredCars = this.props.cars.filter(createFilter(this.props.searchTerm, KEYS_TO_FILTERS)).filter(
      car => this.props.selectedOptions.every(option => car.features && car.features.includes(option))
    )
    // .filter(car => car.startDate && car.startDate.map(date => date) !== this.props.startDate)


    return (
      <Fragment>
        <RentDateForm rentDates={this.props.rentDates}/>
        <SearchInput
          placeholder={"Type make, model and/or year of production here"}
          className="search-input"
          onChange={this.props.searchUpdated}
          value={this.props.searchTerm}
        />
        <CarFeatures
          selectedOptions={this.props.selectedOptions}
          toggleOption={this.props.toggleOption}
        />
        <CarImg
          cars={filteredCars}
        />
      </Fragment>
    )
  }


}

export default withCars(withSearch(SearchEngine))