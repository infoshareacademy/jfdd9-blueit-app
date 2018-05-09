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
}