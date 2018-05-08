import React, {Component, Fragment} from 'react'
import SearchInput, {createFilter} from 'react-search-input'
import cars from './cars.json'
import './SearchEngine.css'
import CarFeatures from "../CarFeatures/CarFeatures";

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
        <SearchInput className="search-input" onChange={this.searchUpdated}/>
        <CarFeatures selectedOptions={this.state.selectedOptions} toggleOption={this.toggleOption}/>
        {filteredCars.map(car => {
          return (
            <div className="id" key={car.id}>
              <ul>
                <li>
                  <div className="make">{car.make}</div>
                  <div className="model">{car.model}</div>
                  <div className="year">{car.productionYear} </div>
                </li>
              </ul>
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