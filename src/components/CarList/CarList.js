import React, {  Component, } from 'react'
import SearchInput, {createFilter} from 'react-search-input'
import cars from './cars.json'


class CarList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }

  render () {

    return (
      <div>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        {cars.map(car => {
          return (
            <div className="id" key={car.id}>
              <div className="make">{car.Make}</div>
              <div className="model">{car.Model}</div>
              <div className=year> </div>
            </div>
          )
        })}
      </div>
    )
  }

  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
}

export default CarList