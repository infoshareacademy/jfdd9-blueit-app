import React from 'react'
import './CarImg.css'
import SUV from '../../img/car-SUV.jpg'
import fullsize from '../../img/car-fullsize.jpg'
import compact from '../../img/car-compact.jpg'
import minivan from '../../img/car-minivan.jpg'
import CarRentButton from "../CarRentButton/CarRentButton";
import '../CarImg/ShowMore.css'

const options = {
  minivan: {
    label: 'MINIVAN ',
    imageUrl: minivan
  },
  suv: {
    label: 'SUV ',
    imageUrl: SUV
  },
  compact: {
    label: 'COMPACT ',
    imageUrl: compact
  },
  fullsize: {
    label: 'FULLSIZE ',
    imageUrl: fullsize
  }

};


class CarImg extends React.Component {
  state = {
    showMore: false,
    buttonText: 'SHOW MORE'
  }

  clickHeandler = () => {
    this.state.showMore ?
      this.setState({showMore: false, buttonText: 'SHOW MORE'})
      :
      this.setState({showMore: true, buttonText: 'SHOW LESS'})
  }


  render() {
    return (
      <div className="CarImgContainer">
        {
          this.props.cars.slice(0, 5).map(
            car => (
              <div key={car.id} className="CarType">
                <img src={(options[car.carbody] || {}).imageUrl || SUV} alt="car-compact" className="CarImg"/>
                <div className="CarInfo">
                  <p>
                    <strong>{(options[car.carbody] || {}).label || 'Car Undefined'}</strong>
                    <span>{car.make}, {car.model}, {car.productionYear}</span>
                  </p>
                  {car.features.length === 0 ? '' : <p><strong>Features:</strong> {car.features.join(', ')}</p>}
                </div>
                <CarRentButton carId={car.id}/>

              </div>


            )
          )

        }


        <div className="ShowMore">
          <button id="show"
                  className={this.clickHeandler.includes ? 'ShowMore' : 'ShowLess'}
                  onClick={this.clickHeandler}
          >
            {this.state.buttonText}</button>
        </div>


        {
          this.state.showMore && this.props.cars.slice(5, this.state.showMore ? undefined : 5).map(
            car => (
              <div key={car.id} className="CarType">
                <img src={(options[car.carbody] || {}).imageUrl || SUV} alt="car-compact" className="CarImg"/>
                <div className="CarInfo">
                  <p>
                    <strong>{(options[car.carbody] || {}).label || 'Car Undefined'}</strong>
                    <span>{car.make},{car.model}</span>
                  </p>
                  <p> {car.features.join(', ')}</p>
                </div>
                <CarRentButton carId={car.id}/>
              </div>

            )
          )

        }


      </div>
    )
  }
}

export default CarImg
