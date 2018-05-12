import React, {Component, Fragment} from 'react'
import SearchInput, {createFilter} from 'react-search-input'
import cars from './cars.json'
import './SearchEngine.css'
import CarFeatures from "../CarFeatures/CarFeatures";
import CarImg from "../CarListItem/CarImg/CarImg";

const KEYS_TO_FILTERS = [
  'make',
  'model',
  'productionYear',
  'carbody'
]

class SearchEngine extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      selectedOptions: []
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }

  toggleOption = optionName => this.setState(
    ({selectedOptions}) => ({
      selectedOptions: selectedOptions.includes(optionName) ?
        selectedOptions.filter(option => option !== optionName) :
        selectedOptions.concat(optionName)
    })
  )

  render() {
    const filteredCars = cars.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS)).filter(
      car => this.state.selectedOptions.every(option => car.features.includes(option))
    )
    return (
      <Fragment>
        <SearchInput placeholder={"Type make, model and/or year of production here"} className="search-input" onChange={this.searchUpdated}/>
        <CarFeatures selectedOptions={this.state.selectedOptions} toggleOption={this.toggleOption}/>
        <CarImg cars={filteredCars}/>
      </Fragment>
    )
  }

  searchUpdated(term) {
    this.setState({searchTerm: term})
  }
}

export default SearchEngine