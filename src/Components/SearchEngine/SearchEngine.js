import React, {Component, Fragment} from 'react'
import SearchInput, {createFilter} from 'react-search-input'
import cars from './cars.json'

const KEYS_TO_FILTERS = [
  'Make', 'Model', 'ProductionYear']

class SearchEngine extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }

  render() {
    const filteredCars = cars.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
      <Fragment>
        <SearchInput className="search-input" onChange={this.searchUpdated}/>
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