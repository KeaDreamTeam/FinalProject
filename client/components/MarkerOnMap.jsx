import React from 'react'
import {Map, Marker} from 'google-maps-react';

class MarkerOnMap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
          lat: null,
          lng: null,
          mappedRestaurants: []
        }
  }



componentWillMount () {
  this.geocoder = new google.maps.Geocoder
}


  render() {

      if (this.state.lat && this.state.lng)
      return <Marker key={key} position={{lat, lng}} />
      else return <p></p>
    }
  }







  export default MarkerOnMap
