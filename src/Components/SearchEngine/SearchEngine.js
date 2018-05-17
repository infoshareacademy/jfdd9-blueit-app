import React, {Component, Fragment} from 'react'
import SearchInput, {createFilter} from 'react-search-input'
import cars from './cars.json'
import './SearchEngine.css'
import CarFeatures from "../CarFeatures/CarFeatures";
import CarImg from "../CarListItem/CarImg/CarImg";
import {withSearch} from "../contexts/Search";

const KEYS_TO_FILTERS = [
  'make',
  'model',
  'productionYear',
  'carbody'
]

class SearchEngine extends Component {

  render() {
    const filteredCars = cars.filter(createFilter(this.props.searchTerm, KEYS_TO_FILTERS)).filter(
      car => this.props.selectedOptions.every(option => car.features.includes(option))
    )

    return (
      <Fragment>
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

export default withSearch(SearchEngine)