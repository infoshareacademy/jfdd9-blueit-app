import React, { Component} from 'react'
import firebase from 'firebase'

const CarContext = React.createContext()

export const CarConsumer = CarContext.Consumer

export class CarProvider extends Component {

  state = {
    cars: [],
    reservedCarIds: []
  }

  render() {
    return (
      <CarContext.Provider value={this.state}>
        {this.props.children}
      </CarContext.Provider>
    )
  }


  handleSnapshot = snapshot => {
    this.setState({
        cars: Object.entries(snapshot.val() || {}).map(([id, other]) => ({id, ...other}))
      }, () => console.log(this.state)
    )
  }

  componentDidMount() {
          this.carsRef = firebase.database().ref(`/cars`)
          this.carsRef.on('value', this.handleSnapshot)

  }
  componentWillUnmount() {
    if (this.carsRef) {
      this.carsRef.off('value', this.handleSnapshot)
    }
  }

}
export function withCars (Component) {
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

