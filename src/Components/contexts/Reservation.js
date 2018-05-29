import React, {Component} from 'react'
import SUV from '../img/car-SUV.jpg'
import fullsize from '../img/car-fullsize.jpg'
import compact from '../img/car-compact.jpg'
import minivan from '../img/car-minivan.jpg'
import firebase from 'firebase'
import moment from "moment";

const ReservationContext = React.createContext();

export const ReservationConsumer = ReservationContext.Consumer;

export class ReservationProvider extends Component {
  state = {
    // cars: [],
    reservedCarIds: [],
    reservations: [],
    reservationsSortingOrder: null,
    currentReservation: null,

    // State from datepicker (RentCarScreen) passed in rentDates():
    startDate: null,
    endDate: null,

    rentDates: (startDate, endDate) =>
      this.setState({
        startDate: startDate,
        endDate: endDate
      }),

    clearDates: () =>
      this.setState({
        startDate: null,
        endDate: null
      }),

    makeReservation: ({carId, carLocation, startDate, endDate, ...reservation}) => {
      const user = firebase.auth().currentUser
      const firebaseId = firebase.database().ref(`/reservations/${user.uid}`).push({
        ...reservation,
        carId: carId,
        startDate: startDate.format('YYYY-MM-DD'),
        endDate: endDate.format('YYYY-MM-DD'),

      })
      const reservationId = firebaseId.key
      // console.log('ID rezerwacji z firebase', reservationId)

      firebase.database().ref(`/cars/${carId}/reservedFor/${reservationId}`).set({
        startDate: startDate.format('YYYY-MM-DD'),
        endDate: endDate.format('YYYY-MM-DD')
      })
    },


    cancelReservation: (reservationId, carId) => {
      const user = firebase.auth().currentUser
      firebase.database().ref(`/reservations/${user.uid}/${reservationId}`).remove()
      firebase.database().ref(`/cars/${carId}/reservedFor/${reservationId}`).remove()
    },

    initReservation: carId => {
      this.setState({
        currentReservation: {
          carId: carId,
          startDate: null,
          endDate: null,
          location: null
        }
      })
    },

    clearReservationDates: () =>
      this.setState({
        startDate: null,
        endDate: null
      }),

    toggleSortReservationsByDates: () => {
      const sort = this.state.reservations.sort(
        (reservationA, reservationB) =>
          moment(reservationA.startDate).isBefore(moment(reservationB.startDate)) ? -1 :
            moment(reservationA.startDate).isAfter(moment(reservationB.startDate)) ? 1 : 0
      )

      this.setState({
        reservations: sort,
        reservationsSortingOrder: 'ASC'
      })

      if (this.state.reservationsSortingOrder === 'ASC') {
        sort.reverse()
        this.setState({
          reservationsSortingOrder: 'DESC'
        })
      }
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
    // console.log('Reservation render this.state.reservations', this.state.reservations)
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
    this.unsubscribe = firebase.auth().onAuthStateChanged(
      user => {
        if (user !== null) {
          this.reservationRef = firebase.database().ref(`reservations/${user.uid}`)
          this.reservationRef.on('value', this.handleReservationSnapshot)
        } else {
          this.reservationRef.off('value', this.handleReservationSnapshot)
        }
      }
    )

  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe()
    }
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