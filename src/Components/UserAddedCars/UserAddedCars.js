import React, {Fragment, Component} from 'react'
import CarFeatures from '../CarFeatures/CarFeatures'
import firebase from 'firebase'
import './UserAddedCars.css'
import Geocode from "../../vendor/react-geocode";
import {NavLink} from 'react-router-dom'

class UserAddedCars extends Component {
  state = {
    carType: '',
    carMake: '',
    carModel: '',
    carYear: '',
    selectedOptions: [],
    location: '',
    lat: '',
    lng: '',
    ownerId: '',
    cars: []
      }

  handleOptionChange = option => this.setState({
    selectedOptions: this.state.selectedOptions.includes(option) ?
      this.state.selectedOptions.filter(item => item !== option) :
      this.state.selectedOptions.concat(option)
  })

  addCar = (lat, lng) => {
    firebase.database().ref('/cars').push({
      carbody: this.state.carType,
      make: this.state.carMake,
      model: this.state.carModel,
      productionYear: this.state.carYear,
      features: this.state.selectedOptions,
      location: this.state.location,
      ownerId: firebase.auth().currentUser.uid,
      lat, lng
    })
  }


  handleSubmit = event => {
    event.preventDefault()

    const confirm = document.querySelector('.ConfirmScreenHidden');
    confirm.classList.add('ConfirmScreenVisible')

    if (this.state.carType.trim() === '') {
      this.setState({
        formError: new Error('Please select car type below:')
      })

      return
    }

    Geocode.fromAddress(this.state.location).then(
      response => {
        const {lat, lng} = response.results[0].geometry.location;
        this.addCar(lat, lng)
      },
      error => {
        console.error(error);
      }
    )
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
        <div className="ConfirmScreenHidden">
          <h1>THANK YOU FOR JOINING.</h1>
          <h2>YOUR CAR HAS BEEN ADDED TO OUR FLEET</h2>
          <div className="ConfirmScreenBtnContainer">
            <NavLink to="/" className="UserAddedCarsBtnConfirm">
              MAIN PAGE
            </NavLink>
            <NavLink onClick={this.forceUpdate} to={"/user-added-cars"} className="UserAddedCarsBtnConfirm">
              START OVER
            </NavLink>
          </div>
        </div>
        <div className="UserAddedCarsContainer">
          <h1>Register your car with us and become part of Blue Sky Family</h1>
          <h2>Please fill in each field thoroughly:</h2>
          <form onSubmit={this.handleSubmit} data-testid="car-form">
            {this.state.formError && <p data-testid="car-error">{this.state.formError.message}</p>}
            <h4>Car Type:</h4>
            <select
              required
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
            <h4>Car Make:</h4>
            <input
              className="UserAddedInput"
              data-testid="carMake-input"
              name="carMake"
              value={this.state.carMake}
              onChange={this.handleChange}
              placeholder="enter car maker"
              required
            />
            <h4>Car Model:</h4>
            <input
              className="UserAddedInput"
              data-testid="carModel-input"
              name="carModel"
              value={this.state.carModel}
              onChange={this.handleChange}
              placeholder="enter car model"
              required
            />
            <h4>Car Make Year:</h4>
            <input
              type="number"
              min="2000"
              max="2018"
              className="UserAddedInput"
              data-testid="carYear-input"
              name="carYear"
              value={this.state.carYear}
              onChange={this.handleChange}
              placeholder="enter year  [YYYY -format, numbers only]"
              required
            />
            <h4>Car Location</h4>
            <input
              type="text"
              className="UserAddedInput"
              data-testid="location-input"
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
              placeholder="enter address  [city, street]"
              required
            />
            <CarFeatures selectedOptions={this.state.selectedOptions} toggleOption={this.handleOptionChange}/>,
            <button className="UserAddedCarsBtn">ADD YOUR VEHICLE</button>
          </form>
          <div>
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