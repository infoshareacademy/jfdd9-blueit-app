import React from 'react'
import '../CarImg/ShowMore.css'
import CarItem from "../CarItem";

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
              <CarItem key={car.id} car={car}/>
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
              <CarItem key={car.id} car={car}/>
            )
          )
        }

      </div>
    )
  }
}

export default CarImg
