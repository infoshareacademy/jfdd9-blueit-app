import React, {Component} from 'react'
import firebase from 'firebase'

const CarContext = React.createContext()

export const CarConsumer = CarContext.Consumer

export class CarProvider extends Component {

  state = {
    cars: [],
    deleteCar: (carId) => {
      firebase.database().ref(`/cars/${carId}`).remove()
    }

  }

  render() {
    return (
      <CarContext.Provider value={this.state}>
        {this.props.children}
      </CarContext.Provider>
    )
  }




  handleCarSnapshot = snapshot => {
    this.setState({
        cars: Object.entries(snapshot.val() || {}).map(([id, other]) => ({...other, id}))
      }, () => console.log('Cars handleCarSnapshot (this.state)', this.state)
    )
  }

  componentDidMount() {
    this.carsRef = firebase.database().ref(`/cars`)
    this.carsRef.on('value', this.handleCarSnapshot)

  }

  componentWillUnmount() {
    if (this.carsRef) {
      this.carsRef.off('value', this.handleCarSnapshot)
    }
  }

}

export function withCars(Component) {
  function CarAwareComponent(props) {
    return (
      <CarConsumer>
        {
          propsFromContext => (
            <Component {...props} {...propsFromContext}/>
          )
        }
      </CarConsumer>
    )
  }

  CarAwareComponent.displayName = `CarAware(${Component.displayName || Component.name || 'Component'})`

  return CarAwareComponent
}

