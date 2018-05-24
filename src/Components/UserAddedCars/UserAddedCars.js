import React, {Component, Fragment} from 'react'
import CarFeatures from '../CarFeatures/CarFeatures'
import firebase from 'firebase'
import './UserAddedCars.css'
import Geocode from "react-geocode";


class UserAddedCars extends Component {
  state = {
    carType: '',
    carMake: '',
    carModel: '',
    carYear: '',
    selectedOptions: [],
    lat: '',
    lng: '',
    cars: []
  }

  handleOptionChange = option => this.setState({
    selectedOptions: this.state.selectedOptions.includes(option) ?
      this.state.selectedOptions.filter(item => item !== option) :
      this.state.selectedOptions.concat(option)
  })

  addCar = (lat, lng) => {
    const {cars, ...rest} = this.state
    // this.setState({
    //   cars: this.state.cars.concat(rest)
    // })
    firebase.database().ref('/cars').push({
      carbody: this.state.carType,
      make: this.state.carMake,
      model: this.state.carModel,
      productionYear: this.state.carYear,
      features: this.state.selectedOptions,
      lat, lng
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

    Geocode.fromAddress(this.state.location).then(
      response => {
        const {lat, lng} = response.results[0].geometry.location;
        console.log(lat, lng);
        this.addCar(lat, lng)
      },
      error => {
        console.error(error);
      }
    )

  }

  handleChange = event => {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value,
      formError: null
    })
  }

  render() {
    return (
      <Fragment>
        <div className="UserAddedCarsContainer">
          <h1>Here is an option to add your own vehicle to our fleet</h1>
          <h2>Please fill in all fields thoroughly:</h2>
          <form onSubmit={this.handleSubmit} data-testid="car-form">
            {this.state.formError && <p data-testid="car-error">{this.state.formError.message}</p>}
            <h4>Car Type:</h4>
            <select
              className="UserAddedCarsSelector"
              value={this.state.carType}
              onChange={this.handleChange}
              name="carType"
            >
              <option>choose one</option>
              <option value={'suv'}>SUV</option>
              <option value={'minivan'}>minivan</option>
              <option value={'fullsize'}>fullsize</option>
              <option value={'compact'}>compact</option>
            </select>

            <h4>Car make:</h4>
            <input
              className="UserAddedInput"
              data-testid="carMake-input"
              name="carMake"
              value={this.state.carMake}
              onChange={this.handleChange}
              placeholder="enter car maker"
              required
            />
            <h4>Car model:</h4>
            <input
              className="UserAddedInput"
              data-testid="carModel-input"
              name="carModel"
              value={this.state.carModel}
              onChange={this.handleChange}
              placeholder="enter car model"
              required
            />
            <h4>Car make year:</h4>
            <input
              type="number"
              className="UserAddedInput"
              data-testid="carYear-input"
              name="carYear"
              value={this.state.carYear}
              onChange={this.handleChange}
              placeholder="enter year in xxxx -format"
              required
            />
            <h4>Car location</h4>
            <input
              type="text"
              className="UserAddedInput"
              data-testid="location-input"
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
              placeholder="enter address "
              required
            />
            <CarFeatures selectedOptions={this.state.selectedOptions} toggleOption={this.handleOptionChange}/>,
            <button className="UserAddedCarsBtn">ADD YOUR VEHICLE</button>
          </form>
          <div className="UserAddedCarsConfirmation">

            {
              this.state.cars.map(
                car =>
                  <Fragment>
                    <p><strong>type: </strong>{car.carType}</p>
                    <p><strong>make: </strong>{car.carMake}</p>
                    <p><strong>model: </strong>{car.carModel}</p>
                    <p><strong>year: </strong>{car.carYear}</p>
                    <p><strong>features: </strong>{car.selectedOptions}</p>
                    <p><strong>location:</strong>{car.location}</p>
                  </Fragment>
              )
            }
          </div>
        </div>
      </Fragment>
    )
  }
}

export default UserAddedCars