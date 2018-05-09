import React, {Component} from 'react'

const ReservationContext = React.createContext();

export const ReservationConsumer = ReservationContext.Consumer;

export class ReservationProvider extends Component {
  state = {
    reservedCarIds: [],
    makeReservation: ,
    cancelReservation:
  };

  render() {
    return (
      <ReservationContext.Provider value={this.state}>
        {this.props.children}
      </ReservationContext.Provider>
    )
  }
}