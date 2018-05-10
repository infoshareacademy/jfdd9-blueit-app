import React, {Component} from 'react'

const ReservationContext = React.createContext();

export const ReservationConsumer = ReservationContext.Consumer;

export class ReservationProvider extends Component {
  state = {
    cars: [],

    reservedCarIds: [],

    makeReservation: carId => {
      this.setState({
        reservedCarIds: this.state.reservedCarIds.concat(carId)
      })
    },

    cancelReservation: carId => {
      this.setState({
        reservedCarIds: this.state.reservedCarIds.filter(
          id =>
            id !== carId
        )
      })
    }
  };

  render() {
    return (
      <ReservationContext.Provider value={this.state}>
        {this.props.children}
      </ReservationContext.Provider>
    )
  }

  componentDidMount() {
    const reservedCarsAsTextInJSONFormat = localStorage.getItem('storedReservedCarIds');
    const reservedCarsFromLocalStorage = JSON.parse(reservedCarsAsTextInJSONFormat);
    this.setState({
      reservedCarIds: reservedCarsFromLocalStorage || []
    });

    fetch(process.env.PUBLIC_URL + '/cars.json', {
      method: 'GET'
    }).then(response => {
      return response.json();
    }).then(cars => {
      console.log('cars', cars);
      this.setState({
        cars: cars
      })
    }).catch(error => {
      console.log('Error', error)
    })
  }

  componentDidUpdate() {
    const reservedCarIds = this.state.reservedCarIds;
    localStorage.setItem('storedReservedCarIds', JSON.stringify(reservedCarIds));
  }

}