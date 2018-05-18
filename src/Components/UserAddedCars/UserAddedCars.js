import React, {Component, Fragment} from 'react'
import CarFeatures from '../CarFeatures/CarFeatures'
import firebase from 'firebase'


class UserAddedCars extends React.Component {
  state = {
    carType: '',
    carMake: '',
    carModel: '',
    carYear: '',
    selectedOptions: [],
    cars: []
  }

  handleOptionChange = option => this.setState({
    selectedOptions: this.state.selectedOptions.concat(option)
  })

  addCar = () => {
    const { cars, ...rest} = this.state
    this.setState({
      cars: this.state.cars.concat(rest)
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    if (this.state.carType.trim() === '') {
      this.setState({
        formError: new Error('Please specify car type')
      })

      return
    }

    this.addCar()
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      formError: null
    })
  }


  render() {
    return (
      <Fragment>
        <h1>Please fill in all fields</h1>
        <form onSubmit={this.handleSubmit} data-testid="car-form">
          {this.state.formError && <p data-testid="car-error">{this.state.formError.message}</p>}
          <h4>Car Type:</h4>
          <input
            data-testid="carType-input"
            name="carType"
            value={this.state.carType}
            onChange={this.handleChange}
            placeholder="suv, minivan,fullsize,compact"
          />
          <h4>Car make:</h4>
          <input
            data-testid="carMake-input"
            name="carMake"
            value={this.state.carMake}
            onChange={this.handleChange}
            placeholder="car maker"
          />
          <h4>Car model:</h4>
          <input
            data-testid="carModel-input"
            name="carModel"
            value={this.state.carModel}
            onChange={this.handleChange}
            placeholder="enter car model"
          />
          <h4>Car make year:</h4>
          <input
            data-testid="carYear-input"
            name="taskDescription"
            value={this.state.carYear}
            onChange={this.handleChange}
            placeholder="enter year XXXX-format"
          />
          <CarFeatures selectedOptions={this.state.selectedOptions} toggleOption={this.handleOptionChange}/>,
          <button>ADD YOUR VEHICLE</button>
        </form>

        {
          this.state.cars.map(
            car => <p>{car.carType}</p>
          )
        }
      </Fragment>
    )
  }
}

export default UserAddedCars