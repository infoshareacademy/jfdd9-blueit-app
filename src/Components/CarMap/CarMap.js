import React, {Component} from 'react'
import './CarMap.css'

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

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

  render() {
    // const car = this.props.car
    // console.log(car)

    return (
      <div>
        <Map style={{boxShadow: '0 0 5px rgba(73, 78, 92, 0.45)', AlignSelf: "right"}} google={this.props.google}
             initialCenter={{lat: this.props.car.lat, lng: this.props.car.lng}}
             gestureHandling={this.props.gestureHandling || 'greedy'}
             zoom={12}
             onClick={this.onMapClicked}
             position={'centre'}

        >

          <Marker
            onClick={this.onClick}
            position={{lat: this.props.car.lat, lng: this.props.car.lng}}/>

          <InfoWindow onOpen={this.onInfoWindowOpen}
                      marker={this.state.activeMarker}
                      visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>Here is your chosen car</h1>
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