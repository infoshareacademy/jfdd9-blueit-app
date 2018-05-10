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
    showMore: false
  }
  render() {
    return (
        <div className="CarImgContainer">
          {
            this.props.cars.slice(0, this.state.showMore ? undefined : 4).map(
              car => (
                <div className="CarType">
                  <img src={(options[car.carbody] || {}).imageUrl || SUV} alt="car-compact" className="CarImg"/>
                  <div className="CarInfo">
                  <p>
                    <strong>{(options[car.carbody] || {}).label || 'Car Undefined'}</strong>
                    <span>{car.make},{car.model}</span>
                  </p>
                    <p> {car.features.join(', ')}</p>
                  </div>
                    <CarRentButton carId={car.id}/>
                    {/*<CancelRentButton/>*/}
                </div>

              )
            )
          }<div className="ShowMore">
          <button id="show" onClick={() => this.setState({ showMore: true })}>SHOW MORE</button>
        </div>
        </div>
     )
  }
}

export default CarImg
