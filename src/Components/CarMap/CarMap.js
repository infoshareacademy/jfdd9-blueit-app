import React, { Component } from 'react'
import './CarMap.css'

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const carRentals = [
  {
    name:
      'Promyk',
    lat: 54.374760,
    lng: 18.449328
  },
  {
    name: 'Ciapkowo',
    lat: 54.492730,
    lng: 18.527670
  },
  {
    name:
      'Schronisko Sopot',
    lat: 54.443741,
    lng: 18.552334
  }
]

class CarMap extends Component {

  state = {
    showingInfoWindow: false,
    activeMarker: null,
    selectedPlace: null
  }

  onClick = (props, marker,) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  renderMarkers(carRentals) {
    return (
      carRentals.map(
        carRental => (
          <Marker
            key={carRental.name}
            title={carRental.name}
            name={carRental.name}
            onClick={this.onClick}
            position={{lat: carRental.lat, lng: carRental.lng}} />
        )
      )
    )
  }

  render() {

    const carRentalsArray = this.props.carRental ?
      carRentals.filter( carRental => carRental.name === this.props.carRental) : carRentals

    const avgLat = carRentalsArray.map(carRental => carRental.lat).reduce((total, next) => total + next, 0) / carRentalsArray.length
    const avgLng = carRentalsArray.map(carRental => carRental.lng).reduce((total, next) => total + next, 0) / carRentalsArray.length

    return (
      <div>
        <Map style={{ boxShadow: '0 0 5px rgba(73, 78, 92, 0.45)', AlignSelf: "right" }}  google={this.props.google}
             initialCenter={{
               lat: avgLat,
               lng: avgLng
             }}
             gestureHandling={this.props.gestureHandling || 'greedy'}
             zoom={12}
             onClick={this.onMapClicked}
             position={'centre'}

        >

          {this.renderMarkers(carRentalsArray)}

          <InfoWindow onOpen={this.onInfoWindowOpen}
                      marker={this.state.activeMarker}
                      visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>Tu czeka kot dla Ciebie</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyD59DE3Ap3wRYlqL8RFCmvYMii6ua4Fcwo'),
})(CarMap)