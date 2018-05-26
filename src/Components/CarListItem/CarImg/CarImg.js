import React, {Fragment} from 'react'
import '../CarImg/ShowMore.css'
import CarItem from "../CarItem";

class CarImg extends React.Component {
  state = {
    showMore: false,
    buttonText: 'Show more'
  }

  clickHeandler = () => {
    this.state.showMore ?
      this.setState({showMore: false, buttonText: 'Show more'})
      :
      this.setState({showMore: true, buttonText: 'Show less'})
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

        {
          this.props.cars.length > 5 ?
            <Fragment>
              <button id="show"
                      className={this.clickHeandler.includes ? 'ShowMore' : 'ShowLess'}
                      onClick={this.clickHeandler}
              >
                {this.state.buttonText}</button>
            </Fragment> :
            undefined
        }


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
