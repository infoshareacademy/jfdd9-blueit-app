import React, {Component} from 'react'

const ReservationContext = React.createContext();

export const ReservationConsumer = ReservationContext.Consumer;

export class ReservationProvider extends Component {
  state = {
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
    })
  }

  componentDidUpdate() {
    const reservedCarIds = this.state.reservedCarIds;
    localStorage.setItem('storedReservedCarIds', JSON.stringify(reservedCarIds));
  }

}