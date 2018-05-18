import React, {Component} from 'react'
import SUV from '../img/car-SUV.jpg'
import fullsize from '../img/car-fullsize.jpg'
import compact from '../img/car-compact.jpg'
import minivan from '../img/car-minivan.jpg'
import firebase from 'firebase'

const ReservationContext = React.createContext();

export const ReservationConsumer = ReservationContext.Consumer;

export class ReservationProvider extends Component {
  state = {
    cars: [],

    reservations: [],

    currentReservation: null,

    startDate: null,

    endDate: null,

    rentDates: (startDate, endDate) =>
      this.setState({
        startDate: startDate,
        endDate: endDate
      }),

    makeReservation: (reservation) => {
      firebase.database().ref('/reservations').push(reservation)

    },


    cancelReservation: reservationId => {
      firebase.database().ref('/reservations').remove(reservationId)
    },

    initReservation: carId => {
      this.setState({
        currentReservation: {
          carId: carId,
          startDate: null,
          endDate: null,
          place: null
        }
      })
    },

    options: {
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
    }
  };

  render() {
    return (
      <ReservationContext.Provider value={this.state}>
        {this.props.children}
      </ReservationContext.Provider>
    )
  }

  handleReservationSnapshot = snapshot => {
    this.setState({
      reservations: Object.entries(snapshot.val() || {}).map(([id, other]) => ({id, ...other}))
    })
  }


  componentDidMount() {

    this.reservationRef = firebase.database().ref(`/reservations/`)
    this.reservationRef.on('value', this.handleReservationSnapshot)

  }

  componentWillUnmount() {
    if (this.reservationRef) {
      this.reservationRef.off('value', this.handleReservationSnapshot)
    }
  }

}

export function withReservation(Component) {
  function ReservationAwareComponent(props) {
    return (
      <ReservationConsumer>
        {state =>
          <Component {...props} {...state}/>}
      </ReservationConsumer>
    );
  }

  ReservationAwareComponent.displayName = `ReservationAware(${Component.displayName || Component.name || 'Component'})`

  return ReservationAwareComponent
}