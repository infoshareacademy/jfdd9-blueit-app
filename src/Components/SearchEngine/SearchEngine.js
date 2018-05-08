import React, {Component, Fragment} from 'react'
import SearchInput, {createFilter} from 'react-search-input'
import cars from './cars.json'
import './SearchEngine.css'
import CarFeatures from "../CarFeatures/CarFeatures";

const KEYS_TO_FILTERS = [
  'Make', 'Model', 'ProductionYear']

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
    ({ selectedOptions }) => ({
      selectedOptions: selectedOptions.includes(optionName) ?
        selectedOptions.filter(option => option !== optionName) :
        selectedOptions.concat(optionName)
    })
  )

  render() {
    const filteredCars = cars.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
      <Fragment>
        <SearchInput className="search-input" onChange={this.searchUpdated}/>
        <CarFeatures selectedOptions={this.state.selectedOptions} toggleOption={this.toggleOption}/>
        {filteredCars.map(car => {
          return (
            <div className="id" key={car.id}>
              <div className="make">{car.Make}</div>
              <div className="model">{car.Model}</div>
              <div className="year">{car.ProductionYear} </div>
            </div>
          )
        })}
      </Fragment>
    )
  }

  searchUpdated(term) {
    this.setState({searchTerm: term})
  }
}

export default SearchEngine