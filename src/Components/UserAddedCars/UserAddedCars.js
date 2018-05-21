import React, {Component, Fragment} from 'react'
import CarFeatures from '../CarFeatures/CarFeatures'
import firebase from 'firebase'
import './UserAddedCars.css'


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
    const {cars, ...rest} = this.state
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
        <div className="UserAddedCarsContainer">
          <h1>Please fill in all fields</h1>
          <form onSubmit={this.handleSubmit} data-testid="car-form">
            {this.state.formError && <p data-testid="car-error">{this.state.formError.message}</p>}
            <h4>Car Type:</h4>
            <select className="UserAddedCarsSelector" required>
              <option>choose one</option>
              <option>SUV</option>
              <option>minivan</option>
              <option>fullsize</option>
              <option>compact</option>
            </select>
            <input
              className="UserAddedInput"
              data-testid="carType-input"
              name="carType"
              value={this.state.carType}
              onChange={this.handleChange}
              placeholder="choose between: SUV, minivan, fullsize, compact"
            />
            <h4>Car make:</h4>
            <input
              className="UserAddedInput"
              data-testid="carMake-input"
              name="carMake"
              value={this.state.carMake}
              onChange={this.handleChange}
              placeholder="enter car maker"
            />
            <h4>Car model:</h4>
            <input
              className="UserAddedInput"
              data-testid="carModel-input"
              name="carModel"
              value={this.state.carModel}
              onChange={this.handleChange}
              placeholder="enter car model"
            />
            <h4>Car make year:</h4>
            <input
              className="UserAddedInput"
              data-testid="carYear-input"
              name="carYear"
              value={this.state.carYear}
              onChange={this.handleChange}
              placeholder="enter year in XXXX-format"
            />
            <CarFeatures selectedOptions={this.state.selectedOptions} toggleOption={this.handleOptionChange}/>,
            <button className="UserAddedCarsBtn">ADD YOUR VEHICLE</button>
          </form>
          <div className="UserAddedCarsConfirmation">

            {
              this.state.cars.map(
                car => <p><strong>type: </strong>{car.carType}</p>
              )
            }
            {
              this.state.cars.map(
              car => <p><strong>make: </strong>{car.carMake}</p>
              )
            }
            {
              this.state.cars.map(
                car => <p><strong>model: </strong>{car.carModel}</p>
              )
            }
            {
              this.state.cars.map(
                car => <p><strong>year: </strong>{car.carYear}</p>
              )
            }
          </div>
        </div>
      </Fragment>
    )
  }
}

export default UserAddedCars